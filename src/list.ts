import chat from './web/chat';
import image from './web/image';
import openai from './web/openai';
import agent from './web/agent';
import speech from './web/speech';
import video from './web/video';
import write from './web/write';
import program from './web/program';
import search from './web/search';
import music from './web/music';
import prompt from './web/prompt';


export interface Category {
  category: string;
  list: {
    url: string;
    logo: string;
    title: string;
  }[];
}

const list: Category[] = [
  {
    category: 'chat',
    list: chat, 
  },
  {
    category: 'image',
    list: image, 
  },
  {
    category: 'openai key',
    list: openai,
  },
  {
    category: 'prompt',
    list: prompt,
  },
  {
    category: 'agent',
    list: agent,
  },
  {
    category: 'search',
    list: search,
  },
  {
    category: 'speech',
    list: speech,
  },
  {
    category: 'video',
    list: video,
  },
  {
    category: 'write',
    list: write,
  },
  {
    category: 'program',
    list: program,
  },
  {
    category: 'music',
    list: music,
  },
];

export default list;
