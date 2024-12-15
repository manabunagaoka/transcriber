'use client';

import React, { useState } from 'react';
import EmotionDetector from '@/components/EmotionDetector';

export default function TestPage() {
  const [detectedEmotion, setDetectedEmotion] = useState<string>('');

  const handleEmotionDetected = (emotion: string) => {
    setDetectedEmotion(emotion);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Emotion Detection Test</h1>
      
      <EmotionDetector onEmotionDetected={handleEmotionDetected} />
      
      {detectedEmotion && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold">Last Detected Emotion:</h2>
          <p className="text-lg mt-2">{detectedEmotion}</p>
        </div>
      )}
    </div>
  );
}