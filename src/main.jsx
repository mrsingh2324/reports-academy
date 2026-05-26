import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LineChart,
  Search,
  UsersRound,
} from 'lucide-react';
import './styles.css';

const cohorts = [
  { name: 'Grade 8 - Science', completion: 92, trend: '+8%', status: 'On track' },
  { name: 'Grade 10 - Math', completion: 78, trend: '+4%', status: 'Needs review' },
  { name: 'Grade 12 - English', completion: 86, trend: '+6%', status: 'On track' },
];

const tasks = [
  'Review low-scoring objectives',
  'Publish weekly guardian summary',
  'Schedule intervention check-ins',
];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand">
          <GraduationCap size={30} aria-hidden="true" />
          <span>Reports Academy</span>
        </div>
        <nav>
          <a className="active" href="#dashboard"><BarChart3 size={18} />Dashboard</a>
          <a href="#reports"><ClipboardList size={18} />Reports</a>
          <a href="#classes"><UsersRound size={18} />Classes</a>
          <a href="#calendar"><CalendarDays size={18} />Calendar</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Academic reporting dashboard</p>
            <h1>Student progress, ready for action.</h1>
          </div>
          <label className="search">
            <Search size={18} aria-hidden="true" />
            <input type="search" placeholder="Search students, classes, reports" />
          </label>
        </header>

        <section className="metrics" aria-label="Summary metrics">
          <article>
            <span>Reports sent</span>
            <strong>1,284</strong>
            <small>94% guardian delivery</small>
          </article>
          <article>
            <span>Mastery gain</span>
            <strong>12.6%</strong>
            <small>Across active cohorts</small>
          </article>
          <article>
            <span>At-risk students</span>
            <strong>38</strong>
            <small>Down 11 this month</small>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel wide">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Cohort progress</p>
                <h2>Weekly completion overview</h2>
              </div>
              <LineChart size={22} aria-hidden="true" />
            </div>
            <div className="cohort-list">
              {cohorts.map((cohort) => (
                <div className="cohort-row" key={cohort.name}>
                  <div>
                    <strong>{cohort.name}</strong>
                    <span>{cohort.status}</span>
                  </div>
                  <div className="progress" aria-label={`${cohort.completion}% complete`}>
                    <span style={{ width: `${cohort.completion}%` }} />
                  </div>
                  <b>{cohort.trend}</b>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Next actions</p>
                <h2>Today</h2>
              </div>
              <BookOpenCheck size={22} aria-hidden="true" />
            </div>
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
