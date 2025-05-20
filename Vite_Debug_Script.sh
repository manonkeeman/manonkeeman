#!/bin/bash

echo "🔍 Starting Vite Debug Script..."
echo "==============================="

# 1️⃣  Check if Vite is running
echo "➡️  Checking if Vite is running on port 5173 or 8080..."
VITE_PROCESS=$(lsof -i :5173)
VITE_PROCESS_ALT=$(lsof -i :8080)

if [ -z "$VITE_PROCESS" ] && [ -z "$VITE_PROCESS_ALT" ]; then
    echo "❌ Vite is not running. Starting Vite on port 5173..."
    npm run dev &
    sleep 5
else
    echo "✅ Vite is already running."
fi

# 2️⃣  Test localhost connection
echo "➡️  Testing connection to http://localhost:5173/ ..."
curl -I http://localhost:5173/

# 3️⃣  Check directory structure
echo "➡️  Checking directory structure..."
if [ -d "./public" ] && [ -f "./public/index.html" ]; then
    echo "✅ Public folder and index.html found."
else
    echo "❌ Public folder or index.html is missing!"
fi

if [ -d "./src" ] && [ -f "./src/Main.jsx" ]; then
    echo "✅ Main.jsx found in src folder."
else
    echo "❌ Main.jsx is missing in src folder!"
fi

# 4️⃣  Display running processes on 5173 and 8080
echo "➡️  Displaying running processes on port 5173 and 8080..."
sudo lsof -i :5173
sudo lsof -i :8080

# 5️⃣  Check vite.config.js
echo "➡️  Checking vite.config.js for correct input..."
if grep -q "input: './public/index.html'" vite.config.js; then
    echo "✅ vite.config.js is configured correctly."
else
    echo "❌ vite.config.js is not configured correctly."
fi

echo "==============================="
echo "🔍 Vite Debug Script Finished."

