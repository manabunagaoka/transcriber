export interface TranscriptionSegment {
  text: string;
  timestamp: number;
}

interface RecordingOptions {
  videoQuality: 'high' | 'medium' | 'low'
  format: 'webm' | 'mp4'
  withAudio: boolean
  audioFormat: 'mp3' | 'wav'
}