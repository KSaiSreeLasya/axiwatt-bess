import { jsPDF } from 'jspdf';
import { ProductSpec } from '../types';

/**
 * Generates and triggers download of a professional technical datasheet PDF
 */
export function downloadProductDatasheet(product: ProductSpec) {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const primaryColor = [0, 109, 68]; // AxiWatt Green #006d44
    const darkColor = [25, 28, 30]; // #191c1e
    const mutedColor = [108, 123, 112]; // #6c7b70
    const lightBg = [242, 244, 246]; // #f2f4f6

    // Header Background Bar
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 26, 'F');

    // Brand Title
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('AxiWatt', 14, 13);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('PRECISION INDUSTRIAL BATTERY & ENERGY STORAGE SYSTEMS', 14, 19);

    // Meta right-aligned
    doc.setFontSize(8);
    doc.text(`DOC: AX-DS-${product.id.toUpperCase()}-2024`, 196, 11, { align: 'right' });
    doc.text('STATUS: CERTIFIED TECHNICAL SPECIFICATION', 196, 16, { align: 'right' });
    doc.text('STANDARDS: UL 9540 / IEC 62619 / CE', 196, 21, { align: 'right' });

    // Product Title Section
    let cursorY = 36;
    doc.setFillColor(82, 242, 167); // Accent pill #52f2a7
    doc.roundedRect(14, cursorY - 4, 46, 6, 1.5, 1.5, 'F');
    doc.setTextColor(0, 33, 17);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(product.badge || 'PRO GRADE', 16, cursorY);

    cursorY += 8;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text(product.name, 14, cursorY);

    cursorY += 5;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(product.subtitle, 14, cursorY);

    cursorY += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    const splitDesc = doc.splitTextToSize(product.description, 182);
    doc.text(splitDesc, 14, cursorY);
    cursorY += splitDesc.length * 4.5 + 4;

    // Section 1: Electrical & Mechanical Specifications
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(14, cursorY, 182, 6, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('1. ELECTRICAL & OPERATING BENCHMARKS', 17, cursorY + 4.2);
    cursorY += 7;

    const specs = [
      ['Nominal Storage Capacity', product.capacity],
      ['Continuous Power Output', product.powerOutput || 'Adaptive Dispatch Architecture'],
      ['Round-Trip Efficiency (RTE)', product.efficiency || '94.5% - 97.5% System Level'],
      ['Operating DC Voltage Range', product.voltageRange || '400V - 1,500V DC Dynamic'],
      ['Cycle Life Benchmark', product.cycleLife || '8,000+ Cycles @ 80% DoD'],
      ['Thermal Loop Architecture', product.coolingSystem || 'Precision Direct Liquid Cooling'],
      ['Enclosure & Physical Form', product.dimensions || 'Standard ISO Heavy Enclosure']
    ];

    specs.forEach(([label, val], idx) => {
      if (idx % 2 === 0) {
        doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
        doc.rect(14, cursorY, 182, 6, 'F');
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
      doc.text(label, 17, cursorY + 4.2);

      doc.setFont('helvetica', 'normal');
      doc.text(val, 85, cursorY + 4.2);
      cursorY += 6;
    });

    cursorY += 4;

    // Section 2: Architecture Highlights & Features
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(14, cursorY, 182, 6, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('2. CORE ENGINEERING FEATURES & SYSTEM ADVANTAGES', 17, cursorY + 4.2);
    cursorY += 8;

    product.features.forEach((feat) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('✓', 17, cursorY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
      doc.setFontSize(8.5);
      const featLines = doc.splitTextToSize(feat, 172);
      doc.text(featLines, 23, cursorY);
      cursorY += featLines.length * 4.5 + 2;
    });

    cursorY += 2;

    // Section 3: Safety & Global Compliance
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(14, cursorY, 182, 6, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('3. COMPLIANCE & SAFETY ASSURANCE', 17, cursorY + 4.2);
    cursorY += 8;

    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.roundedRect(14, cursorY, 182, 16, 2, 2, 'F');
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Verified Certifications:', 17, cursorY + 5);
    doc.setFont('helvetica', 'normal');
    doc.text(product.certifications?.join('  ·  ') || 'UL 9540, UL 9540A, CE, IEC 62619, RoHS, UN 38.3', 52, cursorY + 5);

    doc.setFont('helvetica', 'bold');
    doc.text('Manufacturing Standard:', 17, cursorY + 11);
    doc.setFont('helvetica', 'normal');
    doc.text('ISO 9001 / ISO 14001 Quality Management & Zero-Defect Inspection', 56, cursorY + 11);

    // Official Footer with user's verified contact details
    const footerY = 272;
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.5);
    doc.line(14, footerY, 196, footerY);

    doc.setFontSize(7.5);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('AxiWatt — Powering Progress. Energizing the Future.', 14, footerY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text('Email: contact@axiwatt.com  |  Phone: +91 95530 29624', 14, footerY + 9);
    doc.text(
      'Address: Plot no.102, 103 Sri Krishna Vihar, Temple Lane, Mythri Nagar Phase-2, Serilingampally, Hyderabad, 500049',
      14,
      footerY + 13
    );

    doc.text('© 2024 AxiWatt. All rights reserved. Confidential Engineering Datasheet.', 196, footerY + 13, {
      align: 'right'
    });

    // Save actual PDF file directly to client computer
    const cleanFileName = `AxiWatt_${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_Datasheet.pdf`;
    doc.save(cleanFileName);
    return true;
  } catch (err) {
    console.error('Error generating PDF datasheet:', err);
    return false;
  }
}
