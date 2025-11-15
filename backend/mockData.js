const { v4: uuidv4 } = require('uuid');

const sessions = {};

function createSession(title = null) {
    const id = uuidv4();
    sessions[id] = {
        id,
        title: title || `Session ${Object.keys(sessions).length + 1}`,
        createdAt: new Date().toISOString(),
        history: []
    };
    return sessions[id];
}

// seed one session
const s1 = createSession('Welcome Session');
s1.history.push({
    id: uuidv4(),
    role: 'user',
    text: 'Show me a sales summary',
    createdAt: new Date().toISOString()
});
s1.history.push({
    id: uuidv4(),
    role: 'assistant',
    text: 'Here is a sample sales summary table for Q1.',
    table: {
        columns: ['Region', 'Sales', 'Growth'],
        rows: [
            ['North', '12000', '5%'],
            ['South', '9000', '2%'],
            ['East', '15000', '8%'],
            ['West', '7000', '-1%']
        ],
        description: 'Sales are in USD, Growth is QoQ'
    },
    createdAt: new Date().toISOString()
});

module.exports = {
    sessions,
    createSession,
};
