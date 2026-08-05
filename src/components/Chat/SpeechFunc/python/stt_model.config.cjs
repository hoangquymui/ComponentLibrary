const path = require("path");

module.exports = {
  apps: [
    {
      name: "stt-python-server",
      script: "server_stt.py",
      interpreter: path.join(__dirname, ".venv", "Scripts", "python.exe"),
      cwd: __dirname,
      exec_mode: "fork",
      windowsHide: true,
      autorestart: true,
      watch: false,
      env: {
        PYTHONUNBUFFERED: "1",
      },
    },
  ],
};
