import { useState } from "react";

 export function formatNumber(num) {
    const units = [
      { value: 1e7, symbol: 'Cr' },   // Crore
      { value: 1e5, symbol: 'L' },    // Lakh
      { value: 1e6, symbol: 'M' },    // Million
      { value: 1e3, symbol: 'K' },    // Thousand
      { value: 1, symbol: '' }
    ];
  
    const unit = units.find(unit => Math.abs(num) >= unit.value);
    
    if (unit) {
      const formattedNum = (num / unit.value).toFixed(1);
      return formattedNum.replace(/\.0$/, '') + unit.symbol;
    }
  
    return num.toString();
  }
 export  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = (now.getMonth() - date.getMonth()) + 
                       (now.getFullYear() - date.getFullYear()) * 12;
    const diffYears = now.getFullYear() - date.getFullYear();

    if (diffYears > 0) {
        return diffYears === 1 ? "1 year ago" : `${diffYears} years ago`;
    } else if (diffMonths > 0) {
        return diffMonths === 1 ? "1 month ago" : `${diffMonths} months ago`;
    } else if (diffDays > 0) {
        return diffDays === 1 ? "1 day ago" : `${diffDays} days ago`;
    } else if (diffHours > 0) {
        return diffHours === 1 ? "1 hour ago" : `${diffHours} hours ago`;
    } else {
        return "Just now";
    }
}

var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  export function generate() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
        return finalName;
    };

    export function generateRandomText() {
        let length = 15;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          randomText += charset[randomIndex];
        }
      
        return randomText;
      }
      
      export const filterUniqueVideos = (recommendVideos) => {
        return recommendVideos?.filter((video, index, self) => {
          const videoId = video?.contentDetails?.upload?.videoId;
          const playlistId = video?.contentDetails?.upload?.playlistId;
  
          const identifier = videoId || playlistId;
      
          if (!identifier) return false; 
      
          const isDuplicate = self.findIndex((v) => {
            const vVideoId = v?.contentDetails?.upload?.videoId;
            const vPlaylistId = v?.contentDetails?.upload?.playlistId;
            return (vVideoId || vPlaylistId) === identifier;
          });
      
          return index === isDuplicate;
        });
      };