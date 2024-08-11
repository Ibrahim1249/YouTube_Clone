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
