#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const dir = __dirname
const root = path.resolve(dir, '..')

const exists = fs.existsSync(path.resolve(root, './src'))
if (!exists) {
  console.log('src already removed - skipping')
  process.exit(0)
}

const { spawn } = require('child_process')

spawn('npm run build && rm -rf ./src', { cwd: root, shell: true, stdio: 'inherit' })
