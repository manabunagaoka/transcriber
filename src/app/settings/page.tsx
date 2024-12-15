// src/app/settings/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus, X } from 'lucide-react'
import { TranscriptionConfig } from '@/types'

export default function SettingsPage() {
  const [config, setConfig] = useState<TranscriptionConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('transcriptionConfig')
      return saved ? JSON.parse(saved) : { keywords: {} }
    }
    return { keywords: {} }
  })
  
  const [newCategory, setNewCategory] = useState('')
  const [newKeyword, setNewKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    localStorage.setItem('transcriptionConfig', JSON.stringify(config))
  }, [config])

  const addCategory = () => {
    if (newCategory && !(newCategory in config.keywords)) {
      setConfig(prev => ({
        ...prev,
        keywords: {
          ...prev.keywords,
          [newCategory]: []
        }
      }))
      setNewCategory('')
    }
  }

  const addKeyword = () => {
    if (newKeyword && selectedCategory && !config.keywords[selectedCategory].includes(newKeyword)) {
      setConfig(prev => ({
        ...prev,
        keywords: {
          ...prev.keywords,
          [selectedCategory]: [...prev.keywords[selectedCategory], newKeyword]
        }
      }))
      setNewKeyword('')
    }
  }

  const removeKeyword = (category: string, keyword: string) => {
    setConfig(prev => ({
      ...prev,
      keywords: {
        ...prev.keywords,
        [category]: prev.keywords[category].filter(k => k !== keyword)
      }
    }))
  }

  const removeCategory = (category: string) => {
    const { [category]: removed, ...rest } = config.keywords
    setConfig(prev => ({
      ...prev,
      keywords: rest
    }))
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h2 className="text-xl font-semibold">Keyword Settings</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Add Category</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 bg-gray-800 rounded p-2"
              placeholder="Enter category name"
            />
            <button
              onClick={addCategory}
              className="bg-blue-600 p-2 rounded hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {Object.keys(config.keywords).length > 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Add Keyword</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-gray-800 rounded p-2 mb-2"
            >
              <option value="">Select category</option>
              {Object.keys(config.keywords).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {selectedCategory && (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  className="flex-1 bg-gray-800 rounded p-2"
                  placeholder="Enter keyword"
                />
                <button
                  onClick={addKeyword}
                  className="bg-blue-600 p-2 rounded hover:bg-blue-700"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          {Object.entries(config.keywords).map(([category, keywords]) => (
            <div key={category} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{category}</h3>
                <button
                  onClick={() => removeCategory(category)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywords.map(keyword => (
                  <span
                    key={keyword}
                    className="bg-gray-700 px-3 py-1 rounded-full flex items-center space-x-1"
                  >
                    <span>{keyword}</span>
                    <button
                      onClick={() => removeKeyword(category, keyword)}
                      className="text-red-500 hover:text-red-600 ml-2"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}