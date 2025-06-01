"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Settings, Edit3, Save, Eye, EyeOff, Upload, Image, Type, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image' | 'video';
  editable: boolean;
}

const initialContent: ContentSection[] = [
  {
    id: 'hero-title',
    title: 'Hero Section Title',
    content: 'AVXIRA GAMES',
    type: 'text',
    editable: true
  },
  {
    id: 'hero-subtitle',
    title: 'Hero Section Subtitle',
    content: 'Crafting immersive gaming experiences that push the boundaries of imagination. Welcome to the future of interactive entertainment.',
    type: 'text',
    editable: true
  },
  {
    id: 'hero-video',
    title: 'Hero Background Video',
    content: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video',
    editable: true
  },
  {
    id: 'company-description',
    title: 'Company Description',
    content: 'Founded with a vision to revolutionize gaming, AVXIRA Games combines cutting-edge technology with creative storytelling to deliver unforgettable gaming experiences.',
    type: 'text',
    editable: true
  },
  {
    id: 'contact-email',
    title: 'Contact Email',
    content: 'infobabe09@gmail.com',
    type: 'text',
    editable: true
  },
  {
    id: 'contact-phone',
    title: 'Contact Phone',
    content: '+1 (555) 123-GAME',
    type: 'text',
    editable: true
  }
];

export function ContentManager() {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ContentSection[]>(initialContent);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  console.log("Content manager rendered, visible:", isVisible);

  const handleEdit = (section: ContentSection) => {
    console.log("Editing section:", section.id);
    setEditingId(section.id);
    setEditValue(section.content);
  };

  const handleSave = (id: string) => {
    console.log("Saving content for:", id, "Value:", editValue);
    setContent(prev => prev.map(item => 
      item.id === id ? { ...item, content: editValue } : item
    ));
    setEditingId(null);
    setEditValue('');
    
    // Here you would typically save to a database or API
    // For now, we'll just update the local state
  };

  const handleCancel = () => {
    console.log("Canceling edit");
    setEditingId(null);
    setEditValue('');
  };

  if (!isVisible) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={() => {
            console.log("Opening content manager");
            setIsVisible(true);
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-electric-blue to-vibrant-purple hover:shadow-neon-blue transition-all duration-300"
        >
          <Settings className="w-6 h-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 bg-space-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gradient-to-br from-charcoal-gray to-space-black border border-electric-blue/30 rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CardHeader className="border-b border-electric-blue/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-vibrant-purple rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Content Manager</CardTitle>
                <p className="text-sm text-gray-400">Edit website content easily</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-neon-green text-space-black">
                Live Editing
              </Badge>
              <Button
                variant="ghost"
                onClick={() => {
                  console.log("Closing content manager");
                  setIsVisible(false);
                }}
                className="text-gray-400 hover:text-white"
              >
                <EyeOff className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="cyber-button h-auto p-4 flex-col">
                <Type className="w-6 h-6 mb-2" />
                <span className="text-xs">Edit Text</span>
              </Button>
              <Button className="cyber-button h-auto p-4 flex-col">
                <Image className="w-6 h-6 mb-2" />
                <span className="text-xs">Images</span>
              </Button>
              <Button className="cyber-button h-auto p-4 flex-col">
                <Upload className="w-6 h-6 mb-2" />
                <span className="text-xs">Upload</span>
              </Button>
              <Button className="cyber-button h-auto p-4 flex-col">
                <Palette className="w-6 h-6 mb-2" />
                <span className="text-xs">Colors</span>
              </Button>
            </div>

            {/* Content Sections */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-white">Editable Content</h3>
              
              {content.map((section) => (
                <Card key={section.id} className="game-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-white">{section.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {section.type}
                          </Badge>
                        </div>
                        
                        {editingId === section.id ? (
                          <div className="space-y-3">
                            {section.type === 'text' ? (
                              section.content.length > 100 ? (
                                <Textarea
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  className="bg-charcoal-gray border-electric-blue/30 text-white"
                                  rows={4}
                                />
                              ) : (
                                <Input
                                  value={editValue}
                                  onChange={(e) => setEditValue(e.target.value)}
                                  className="bg-charcoal-gray border-electric-blue/30 text-white"
                                />
                              )
                            ) : (
                              <Input
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="bg-charcoal-gray border-electric-blue/30 text-white"
                                placeholder="Enter URL"
                              />
                            )}
                            
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                onClick={() => handleSave(section.id)}
                                className="bg-neon-green text-space-black hover:bg-neon-green/80"
                              >
                                <Save className="w-4 h-4 mr-1" />
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCancel}
                                className="border-gray-600 text-gray-400"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-300 text-sm">
                            {section.type === 'text' ? (
                              <p className="line-clamp-3">{section.content}</p>
                            ) : (
                              <p className="text-electric-blue underline">
                                {section.content}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {editingId !== section.id && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(section)}
                          className="text-electric-blue hover:text-white hover:bg-electric-blue/20"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Login Information */}
            <Card className="game-card border-vibrant-purple/30">
              <CardContent className="p-4">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-vibrant-purple" />
                  Access Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-electric-blue">infobabe09@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <Badge className="bg-neon-green text-space-black">Active</Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    This content manager allows you to edit website content in real-time. 
                    Changes are saved instantly and reflected across the website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </motion.div>
    </motion.div>
  );
}