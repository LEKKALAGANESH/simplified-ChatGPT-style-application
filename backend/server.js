const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { sessions, createSession } = require('./mockData');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

/**
 * GET /api/sessions
 * Return list of sessions (id, title, createdAt)
 */

app.get('/api/sessions', (req, res) => {
    const list = Object.values(sessions).map(s => ({ id: s.id, title: s.title, createdAt: s.createdAt }));
    res.json({ sessions: list });
});

/**
 * GET /api/new-chat
 * Return new session ID
 */

app.get('/api/new-chat', (req, res) => {
    const s = createSession();
    res.json({ sessionId: s.id, title: s.title });
});

/**
 * GET /api/session/:id
 * Return conversation history for a session
 */

app.get('/api/session/:id', (req, res) => {
    const id = req.params.id;
    const s = sessions[id];
    if (!s) return res.status(404).json({ error: 'Session not found' });
    res.json({ session: s });
});

/**
 * POST /api/chat/:id
 * Accepts { question } and returns a mock assistant response with table + text
 */

app.post('/api/chat/:id', (req, res) => {
    const id = req.params.id;
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: 'question required' });

    let s = sessions[id];
    if (!s) {
        s = createSession();
    }

    const userMsg = { id: uuidv4(), role: 'user', text: question, createdAt: new Date().toISOString() };
    s.history.push(userMsg);

    const table = {
        columns: ['Metric', 'Value', 'Note'],
        rows: [
            ['Query', '' + question.slice(0, 50), 'User query truncated for demo'],
            ['ReturnedRows', '' + (Math.floor(Math.random() * 100) + 1), 'Mock number'],
            ['Confidence', '' + (Math.floor(Math.random() * 50) + 50) + '%', 'Mock confidence']
        ],
        description: `This table is generated from a mock response to: "${question}"`
    };

    const assistantMsg = {
        id: uuidv4(),
        role: 'assistant',
        text: `Mock answer for: "${question}". See table below.`,
        table,
        createdAt: new Date().toISOString()
    };

    s.history.push(assistantMsg);

    res.json({ answer: assistantMsg });
});

/**
 * Catch-all health
 */

app.get('/', (req, res) => res.send('Mock Chat API is running'));

app.listen(PORT, () => {
    console.log(`Mock server listening on http://localhost:${PORT}`);
});


