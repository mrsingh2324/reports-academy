import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ExternalLink, FileText, GraduationCap } from 'lucide-react';
import './styles.css';

const reports = [
  { name: 'Gopisetti', file: '/reports/gopisetti.html' },
  { name: 'Kanduri Sai Sri Vidya', file: '/reports/kanduri-sai-sri-vidya.html' },
  { name: 'Naga Seetha Kota', file: '/reports/naga-seetha-kota.html' },
  { name: 'Varshni Amrutha' },
  { name: 'Valeti Bhaskar' },
  { name: 'Vurubindi Venkata Siva Karthik' },
  { name: 'Thummu Koushik' },
  { name: 'M Shreeya Patro' },
  { name: 'Allada Sai Anoop', file: '/reports/allada-sai-anoop.html' },
  { name: 'Reddipalli Phani Koushik', file: '/reports/reddipalli-phani-koushik.html' },
  { name: 'Sandeep', file: '/reports/sandeep.html' },
  { name: 'Veera Manikandan', file: '/reports/veera-manikandan.html' },
  { name: 'Tatimakula Divyadeepthi', file: '/reports/tatimakula-divyadeepthi.html' },
  { name: 'Abhishek Kethepally', file: '/reports/abhishek-kethepally.html' },
  { name: 'Manasa Jilla', file: '/reports/manasa-jilla.html' },
  { name: 'Lokesh', file: '/reports/lokesh.html' },
  { name: 'Krishnavamsi', file: '/reports/krishnavamsi.html' },
];

function App() {
  const [showReports, setShowReports] = useState(false);
  const [selectedReport, setSelectedReport] = useState(reports.find((report) => report.file));

  if (!showReports) {
    return (
      <main className="landing">
        <section className="hero">
          <div className="brand">
            <GraduationCap size={34} aria-hidden="true" />
            <span>Reports Academy</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Interview report library</p>
            <h1>Reports Academy</h1>
            <p className="lede">Open every available student interview report from one static React app.</p>
            <button className="primary-action" type="button" onClick={() => setShowReports(true)}>
              <FileText size={20} aria-hidden="true" />
              Watch reports
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="reports-app">
      <aside className="report-list" aria-label="Interview reports">
        <div className="list-header">
          <button className="icon-button" type="button" onClick={() => setShowReports(false)} aria-label="Back">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <div>
            <p className="eyebrow">Reports</p>
            <h2>Students</h2>
          </div>
        </div>

        <div className="names">
          {reports.map((report) => (
            <button
              className={selectedReport?.name === report.name ? 'name-button active' : 'name-button'}
              type="button"
              key={report.name}
              onClick={() => report.file && setSelectedReport(report)}
              disabled={!report.file}
            >
              <span>{report.name}</span>
              {!report.file && <small>No file</small>}
            </button>
          ))}
        </div>
      </aside>

      <section className="viewer">
        <header className="viewer-header">
          <div>
            <p className="eyebrow">Selected report</p>
            <h1>{selectedReport?.name}</h1>
          </div>
          {selectedReport?.file && (
            <a className="open-link" href={selectedReport.file} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Open
            </a>
          )}
        </header>

        {selectedReport?.file ? (
          <iframe className="report-frame" src={selectedReport.file} title={`${selectedReport.name} report`} />
        ) : (
          <div className="empty-state">
            <FileText size={42} aria-hidden="true" />
            <p>No report file has been added for this student.</p>
          </div>
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
