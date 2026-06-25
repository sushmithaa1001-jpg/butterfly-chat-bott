# Butterfly Chat Bot

A simple Flask web app that connects to OpenAI to provide a friendly chatbot experience.

## Features

- Multiple conversation modes: normal, coding, study, interview, content, resume
- Responsive web interface with animated background effects
- Uses environment variables for API credentials

## Setup

1. Create a virtual environment:

```bash
python -m venv venv
```

2. Activate the environment:

On Windows:

```powershell
venv\Scripts\Activate.ps1
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file using the example:

```text
OPENAI_API_KEY=your_openai_api_key_here
```

5. Run the app:

```bash
python app.py
```

6. Open `http://127.0.0.1:5000` in your browser.
