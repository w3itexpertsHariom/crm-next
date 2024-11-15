import React from 'react';
import Link from 'next/link';

const TopMenus = ({id}) => {
    return (
        <ul className="nav nav-tabs style-1 mb-4" id="pills-tab" role="tablist">
            <li className="nav-item">
                <Link href={"/auto-write"} className={`nav-link border-s-1 ${id === 1 ? 'active' : ''}`}>Auto Writer</Link>
            </li>
            <li className="nav-item">
                <Link href={"/scheduled"} className={`nav-link ${id === 2 ? 'active' : ''}`}>Scheduler</Link>
            </li>
            <li className="nav-item">
                <Link href={"/repurpose"} className={`nav-link ${id === 3 ? 'active' : ''}`}>Repurpose</Link>
            </li>
            <li className="nav-item">
                <Link href={"/rss"} className={`nav-link ${id === 4 ? 'active' : ''}`}>RSS</Link>
            </li>
            <li className="nav-item">
                <Link href={"/chatbot"} className={`nav-link ${id === 5 ? 'active' : ''}`}>Chatbot</Link>
            </li>
            <li className="nav-item">
                <Link href={"/fine-tune-models"} className={`nav-link ${id === 6 ? 'active' : ''}`}>Fine-tune Models</Link>
            </li>
            <li className="nav-item">
                <Link href={"/prompt"} className={`nav-link ${id === 7 ? 'active' : ''}`}>AI Menu Prompts</Link>
            </li>
            <li className="nav-item">
                <Link href={"/setting"} className={`nav-link ${id === 8 ? 'active' : ''}`}>Settings</Link>
            </li> 
            <li className="nav-item">
                <Link href={"/import"} className={`nav-link border-s-2 ${id === 9 ? 'active' : ''}`}>Export/Import Settings</Link>
            </li>
        </ul>
    );
};

export default TopMenus;