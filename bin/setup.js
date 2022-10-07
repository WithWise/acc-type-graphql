#!/usr/bin/env node
const path = require('path')

const dir = __dirname
const root = path.resolve(dir, '..')

const { spawn } = require('child_process')

spawn('npm run build', { cwd: root, shell: true, stdio: 'inherit' })
