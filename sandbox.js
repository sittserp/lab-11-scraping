const fs = require('fs');
const pool = require('./lib/utils/pool');

pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
