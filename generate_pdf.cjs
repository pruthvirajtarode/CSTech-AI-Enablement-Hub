const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/cstech-document.pdf'));

// Add logo/header
doc.fontSize(24).font('Helvetica-Bold').fillColor('#2d3748').text('CSTech Global', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(12).font('Helvetica').fillColor('#718096').text('Internal Knowledge Base & Policy Document', { align: 'center' });
doc.moveDown(2);

// Title
doc.fontSize(20).font('Helvetica-Bold').fillColor('#1a202c').text('Official Resource Document');
doc.moveDown(1);

// Content
doc.fontSize(12).font('Helvetica').fillColor('#4a5568')
   .text('This document is highly confidential and intended solely for internal CSTech Global employees. It outlines core operational procedures, strategic AI integrations, and technical requirements across all departments including Procurement, Supply Chain, and Design.', { align: 'justify', lineGap: 4 });

doc.moveDown(1.5);
doc.fontSize(14).font('Helvetica-Bold').fillColor('#2d3748').text('1. Operational Guidelines');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica').fillColor('#4a5568')
   .text('All employees must adhere to the data governance policies when interacting with the new ERP+AI systems. Ensure that no customer PII is transmitted through unauthorized AI endpoints.', { align: 'justify', lineGap: 4 });

doc.moveDown(1.5);
doc.fontSize(14).font('Helvetica-Bold').fillColor('#2d3748').text('2. Workflow Automation');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica').fillColor('#4a5568')
   .text('Leveraging the Workflow Studio will reduce manual data entry by up to 60%. Please refer to the corresponding Department Labs for interactive tutorials on setting up your first automated agent.', { align: 'justify', lineGap: 4 });

doc.moveDown(2);
// Footer
doc.fontSize(10).fillColor('#a0aec0').text('Generated securely via CSTech Enablement Hub', { align: 'center', lineGap: 4 });

doc.end();
console.log('PDF generated successfully at public/cstech-document.pdf');
