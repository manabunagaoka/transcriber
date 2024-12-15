type AudioFormat = 'wav' | 'mp3';  // WAV is more reliable
type VideoFormat = 'webm' | 'mp4';

export interface RecordingOptions {
  videoQuality: 'high' | 'medium' | 'low';
  format: VideoFormat;
  withAudio: boolean;
  audioFormat: AudioFormat;
}