import React from 'react';
import { Tv, Fan, Lamp, Speaker, DivideIcon as LucideIcon } from 'lucide-react';

export const getLucideIcon = (iconName: string): LucideIcon => {
  switch (iconName) {
    case 'tv':
      return Tv;
    case 'fan':
      return Fan;
    case 'lamp':
      return Lamp;
    case 'speaker':
      return Speaker;
    default:
      return Tv;
  }
};