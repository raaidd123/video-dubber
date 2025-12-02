# Video Dubber: From English to Any Indian Regional Language

## Introduction

Video Dubber is an open-source project designed to automate the process of dubbing videos from English into any Indian regional language. This repository aims to bridge the language divide by making video content accessible to a broader audience across India. The tool leverages advanced speech, translation, and synthesis technologies to deliver high-quality, regionally adapted audio tracks for videos.

## Features

- **Automatic Speech Recognition (ASR):** Extracts spoken English content from video files.
- **Multi-Language Translation:** Supports translation of English scripts into various Indian regional languages (e.g., Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Marathi, Gujarati, Punjabi, Odia).
- **Text-to-Speech (TTS) Synthesis:** Converts translated text into natural-sounding speech using regional accents and voices.
- **Audio-Video Synchronization:** Ensures dubbed audio aligns correctly with the video timeline.
- **Batch Processing:** Handles multiple videos for large-scale dubbing requirements.
- **Configurable Language Support:** Easily add or remove supported languages as needed.
- **Simple Command-Line Interface:** Intuitive commands to process videos end-to-end.

## Usage

Follow these instructions to get started with video dubbing:

### 1. Clone the Repository

```bash
git clone https://github.com/raaidd123/video-dubber-From-English-to-any-Indian-Regional-Language-.git
cd video-dubber-From-English-to-any-Indian-Regional-Language-
```

### 2. Prepare Video Files

- Place your source English video files in the designated input directory (e.g., `input_videos/`).

### 3. Configure Language and Settings

- Edit the configuration file (e.g., `config.yaml` or `config.json`) to specify:
  - Target language(s) (e.g., `hi` for Hindi, `ta` for Tamil).
  - Output directory for dubbed videos.
  - Optional: TTS voice parameters, translation API keys, etc.

### 4. Run the Dubbing Process

```bash
python main.py --input input_videos/ --output output_videos/ --lang hi
```

- Replace `--lang hi` with your desired target language code.

### 5. Retrieve Dubbed Videos

- Find the fully dubbed videos in the output directory you specified.

### 6. Batch Processing (Optional)

- For batch processing, place multiple videos in the input directory and rerun the dubbing command.

## Requirements

Make sure your environment meets the following requirements before running the project:

- **Python 3.7+**
- **pip (Python package manager)**
- **FFmpeg** (for audio/video processing; must be installed and available in PATH)
- **Required Python Libraries:**
  - `speechrecognition`
  - `googletrans` or `transformers` for translation
  - `gTTS`, `pyttsx3`, or other TTS library
  - `moviepy` for video/audio synchronization
  - `pydub` for audio processing
  - `argparse` (for command-line argument parsing)
- **Stable Internet Connection:** Required for API-based translation or cloud TTS engines.

### Install Python Dependencies

```bash
pip install -r requirements.txt
```

### Install FFmpeg

- **Windows:** Download FFmpeg from [ffmpeg.org](https://ffmpeg.org/download.html) and add it to your PATH.
- **Linux/macOS:** Install via package manager (e.g., `sudo apt-get install ffmpeg`).

---

This project provides a streamlined, scalable solution for content creators, educators, and organizations aiming to reach audiences in multiple Indian languages. Contributions are welcome to expand language support, improve quality, and enhance features.
