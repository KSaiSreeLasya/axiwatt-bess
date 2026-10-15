import { ProductSpec, FacilityLocation, EsgReport } from '../types';

export const ASSETS = {
  // Brand Logo
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwNf9VQJBJZkSWcHkohLVUNLbH2iOnccxDgCljRYYivEfAQTe4qdrkfun0GdRLS_XxGXXdBvKPTF5fmdK9UC-QWvSDIskJQzRt2zq6nm2kUXDr9tS3SmYfR-0b275FjQgzRMx1Fb-jMiJb14LvWYSFTmpGaEDhGZYxrRkR4jDaHm9xw48w-PwllJdPs1Ne9TyonP1Y5PnD8Mqd975tePLGpSRY0M0mrBDKq8CzwkrtLoGwj2Duqn0aUm45hL2ZzOJ5zNA',
  
  // Home Screen
  homeHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnm2I2dFCGGrUqpYga7kuS_G55abRM4pUHnBT5q9HSpwm1SkCWC0mu0s0Qt82NE4r97Q_ZfARwHhFHHyoE0lEvVLBDaVNT9yXuZiGS60UGWbbxtpQO6lWxPsR1mOplUUweJvuyzBsw-mg_gYm6PBR0M3raOJLq-6FkVTX9e5kmPygpnubcXMI-2JmQoVKRkAv4LDS7BEUYHGR6-NXdEJR0kjjmvL77He2g2Pz_S92T_1V0iUMfxNUQpQ',
  gridConsolidation: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoK2fuMynIfrdmOM1T_H4e3xO5LgoA0l38A_eS9ovJdOPnpL79bp3kFEBl3b5VFJGazun6Ac4cebRoP4QFCV2N_AGggOjcTqo-Kkv-J8YfZ444tuva0oN36fp9C61OnRtvOe17xUDvvLFL6ZjcAIMtAz5V5csXdkW4aeROgaKJkAm81R0axSwpQBIhOHaDtgrYLkm1wBHgA_ICxAU2nvlCbZrusaGd2IzG-Vlan4nInQ4-ZM1riZjSow',
  commercialEdge: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
  heavyManufacturing: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOmpC8ZqW4h8ecXMg4ylkaup2PZZYawnCo35f7Ovbim-XxWBpyaqwLOtH7nEYF6DCAYZnomFTasQ5o0NaVlnetFCHf0aEuCmuWGVXdJZjzlHNUOupiTxJXBe09PvL03wlmJWHHNw7rBLRbMkvK3UzJ6tVzdhEAxNSvjEzEQOHDrAr_yn4TJIanC5SRDSeJGVPuzuxh8gQ_rDvs4qsJgCdsRtAcaIp-y1RBp7yfWhIQ0dLuuc-sp7J5lg',
  solarHome: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000',

  // Products Screen
  productsHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtPI4BuE4jW_8eM5_CJOInL01Wl_7AVA1VnSOsiqhoVqqL4Ibncy602ORprNjjNEF7NTI7DGSxZP6oDaliEMhH1MLxm6QEwop0nWe8xSakvHHpXnNlLznVvfyJuZRJeCHGQy8QaLQ8hIfv4UPqvMhbZ1G0w0DhVsXyOBWKVOwpm8T8aN2vj8JHarcYfqSNOvCn70j8ZPN8ND8VjettPebq60XwFXRvRiLkSojwTKGJJ25eGw1FyOztag',
  vStruc40: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9UcdmELe0u3-H5DyH628gbD59OTZdxulZixF0Ds9sgtUjfVU4qMpu9fKgAfu7UBBQzLei_FIOEZG14l9FOs1XleQBEcV5lFdSBKAYXlVL-hTOGdEmjRLh-JQIOOEHVDK5cEPmUxP-x3Z7i6yztO0QRztfdwl_15AFbJhGD6UVkeBOZz-snHY8K0MMeTF7R6iQgfJSKDHFxtymBPFZS0sdnqlkcuIV2C5jptHN0w1bG4vLTwwhd5BBUg',
  vStruc20: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeTGxctsXLwDRF2iOM85LsOjPpIYVu1zRCqiOdktamLkTr7b2F1kX6PKTVCHnPR8Erls3W_5xm2dDm2rcVQfQ9feU0bgqaaYZG6xW15HzypXnof51_l-q9uNkjZyPiemfTk2PzYwncGqyXqxhXWU3q1X-nFVZCg8dJic7N5bcNGAdhEMbwFp-XxLK_jFmEXDcQfNmIdO-L4HXwwR9XLhrZG82LTQUxEU_GY-upv9vvPHWnUYadvlMh3w',
  vModCore: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByZ2j2ALTWm0xq0ymAKrnBMhPq8lUv0JTH5LVp8nhOFGQG6FJROhzzfXk1XtAfpGKgDY43hFmdsqcovLemLH6UdbUoos0Q2mEpi3tJBu8kBi4to2pGMVvEAqzBrVZTU4Td8_BBSnaohcEZwP7Ku53GjNCn-z2FS7vkV7pZ_zfxaPta6jWI7JY5ViVrdeHt8K1Nomf-38lCENuub-0dW13oyj-R3gw5r0ngX4Lr_bkwKWD6rWHN3_LaYA',
  vModEdge: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6YLfQ9BJFcPCjenVj3-3iUqs_PQO9AQfIDmyZeLtKcCBVcLxP4f3ffnJr14bOf9SlHUXedPxxe-8QAlS4Mht5fBRAmhUn1Y4WJ0OWCEXxUPZZstNm2huJZZHvWPtJTleIxuLfZZvbGBWYv-t1JwBBwZQtKLbAK5FEMbjXBBCMAfPbWp-TA2Y4q8gqYZLWM6nxE2YoCVSL_lz91GA9ekebcV7d5R73u-nsobErp_2WjNjQ592B0utObQ',
  residentialInverter: 'https://images.unsplash.com/photo-1624397648246-47ce3a0d0be1?q=80&w=1000&auto=format&fit=crop',

  // Manufacturing Screen
  factoryHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfmK-L58UAiUZpd_a12Ie07atQ9EFpVALYQv0y66gTVZ6eAb7XfZtjq_s5QR7ZM1bt3tIkpq0If6M7r3PF6441yOfn4B-nQDbn3wnldLgBWAZt43xzM87nphDz4puGgIK2SsD4A5yjTEEMWZDVzJlm9DoICZhTvHbjnSPnE6JprWdmOJc_beQFWLnOAyyBa9ODRfYn4uhUyjDm_XRDVxwtPInbdK7Hmnfw3G4Nj0fmxLA86tGLr0vFtw',
  roboticsArm: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKyldpbFy6lzUAhrQ_Lp-F8EsS749jtYNInSsdyJz5IOHLO13YApi7ponoZveIjSHtw-lhrD6h0DOShCzVjbEri5-9LrSOh_fLRN3ocLYlKFrb2YCzBIBE421jD9tTGmaT9zHE6idgY1yyBBz45934uMyZKJZ72aYB0hZkoOF-3T2HtCHW3rBv0lXznospSA6VOeo_o0vawd3AVF8mdD0V1DUnutJiQWJi_luXYj1FCB7WY-dAKulNw',
  laserWelding: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnOgtb519w8DMIEp_S8WU2WtHbDr9cHCA2VYnvbdsXB3S6NJeC6uASC7W8FIAnr2U15W0BGp8R53xkfWG7bOc8N-fGlLy6eLzYJketurw5zrrAOk8CN-sba8qGjnelpC1Vc5SCYtwIUrJCystI4TgR3JGhCYbN0HBgSqxrP-gt_vmCroVJUYq2ELGOI7zZHrUPM_ABYPAKV4QH-g-FzUjVXaRQ7bLyYUKqbiGtfYTWeCNoNxGmXDWN5Q',
  xrayTomography: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5hA2-PMPdZe-nVg0eY265z7A6AGoKlPaSwz8CGpwwILrcOihePwRHV6VXpvvXLkPzv-wpgZV7LommTwm2ia9acFA9rVjFV74rMay5cjCBu8hzKxRvHkO_omBto6wHlbgxJgxPvWG8OGeKMeAzUw2FcRZxQjJyEj68qi9Ah15x_soSZ7JByc5YHK1OWEWghJFsDvxpORmIBjX4ZxPNN7lpzWpRWXBtzYyZEe4oVazhjymIRyBohWBrgQ',
  scientistLab: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA0Jfv-9VURPoEx3DSmFCY0AIyta28aQ3jktdiZs2pmGlKsB3lyrsowjBTcrbI_r_r3gUhpJqM-g7jOyujCdRWemDikPC7SJ6QHLPV8We31R7Oc3VKF6D8a-DGnbzyYIrkhpaqE-QhIeDPzpueRCEFvFjzvcnGG5Q4gU6MM3um79gFu_QmQmPJuwfZixlt9RjJAabaLkMZqr8upePLasxUJyT-PHvgyCaBbWT5wRhs-1e7VCIzlpfQ-w',
  molecularStructure: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvY43G0ZOnearXf1zI3v692DeExu5Wy5j8nbLa0etGuykOgNp7QCQ3V0pryiO82SuP5mk3BKRPkwpUMFHo2DdImIQTjkp6s2yL9XOaihmvurCImSMwv66MmcuUo2zsD4f_54SQ-r-NML-6GntW-bnw_zbUsDlNJE3RZfdE2UxatNemqLy3Gz7Qb4g7bNqu_2PuHxOgV4LY2P2I7guG6kc1XMA0L3LuNv2sn4X8eKpLSOMhwBRj8VdtAA',

  // Sustainability Screen
  sustainabilityHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArvi2Ps6zbI1KjaQ7_KWtpJvQPb4-DY8ZYPT9V7YTDVMukniL4yKWwWlF5t_V6TfVWChi9bUOepfpRd2_hH4eGRvC0_qKaoJ-LkoVT62P-rJuuRR9mNc-vZljiP4q-qtib2j2wxb_wpbziKeV59bkIVMpiH2rE_5iYUMoBMniRz89aGhX0EsyqFOBUOYKY_5q4FCmwGVdmqZpri6m1a6usZ9WmTYDo8r8Uv8xXIAgmDnTOwpOc81Hmbg',
  batteryRecycling: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzeZ0RYkq-wrbPyH62cwtFOC9JopUmc5PBNhi0MnML3YTwWYgLp8s75xy-akkoB9Y2OfaBsuDj7B03TYPL_mT-ZbuxdxPHIbziJ0JrUA-7iGRi_bGy_tWOSu67OFosZRSyLS7YkiDZf5RH9E6VfgnkWi_LNXjTsiUC0_aHgfw5SF5h-FVIX__k6tIqoDshE2Q88jF6Pjgo-6owF5afl7KY91p-JYSWy9Sji9KOtbt-3v3jRPg0_bKtfA',

  // Contact Screen
  contactController: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyl-qKqK3TDCstHg7JUYvAZEhueZio3a7XxOIr2rzCFVs-1Ha6LaDwAHfoYWuJeAByIV_l-pRB-XcAU-QqaOtUDviEkykJLzZOU2p72jqJHp9j4Muuk7l9OXz06_7OHCH-m7IEhPXa7shYegrR9m5BbbmdbGfpeHBZMnxBp7FAB6afuup-ZkVqUzW5L0tm0juwf1xvj8hMm4n_17Yqh5eC4dmjtais1W1f3Bi3O1DZ8WqgkrE8PEET2Q',
  contactMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFT9dlNZxra9RyHAHM-Mq-PKsS0LxCQ45OiIMJOeabT3S08H6MIG4dWy0bjX0IJcjJanOopATOWZfKAaEs-cY3-GlutoeIvbfavUt185_zmAThhf7a2-k6iVrjblGE17bAkuJxVHD1O-6_I52zkkZ5w1sEOCWWq93XmTvvX1CndqD_VkpZzvct_Vpp2K4r1YHHlkvuvZptROJlQBVJJzIHxTU-M2Wv4wk4033omIr-e3YRiLahE5sqVw'
};

export const PRODUCTS: ProductSpec[] = [
  {
    id: 'automotive-battery',
    name: 'Automotive Battery Solutions',
    category: 'ci',
    subtitle: 'Electric Mobility & Automotive Systems',
    capacity: '40kWh - 120kWh Modular',
    powerOutput: '150kW - 350kW Peak',
    cycleLife: '4,000+ Cycles @ 80% DoD',
    voltageRange: '400V - 800V High Voltage',
    coolingSystem: 'Direct Liquid Ribbon Thermal Cooling',
    efficiency: '96.2% Discharge Efficiency',
    badge: 'ELECTRIC MOBILITY',
    badgeColor: 'bg-[#006d44] text-white',
    image: ASSETS.heavyManufacturing,
    features: [
      'Engineered for electric vehicles, e-buses, and commercial delivery fleets',
      'High-rate fast charging capability (10% to 80% in under 20 mins)',
      'Sub-module thermal barrier to prevent thermal runaway propagation',
      'Advanced ISO 26262 ASIL-D functional safety certified BMS'
    ],
    description: 'Battery technologies for electric mobility and automotive applications, with a focus on energy efficiency, dependable operation, and performance.',
    dimensions: 'Custom modular pack configurations (1.6m x 1.1m x 0.14m typical)',
    certifications: ['ECE R100', 'UN 38.3', 'ISO 26262', 'UL 2580']
  },
  {
    id: 'telecom-battery',
    name: 'Telecom Battery Solutions',
    category: 'ci',
    subtitle: 'Network Continuity & Telecom Infrastructure',
    capacity: '48V 100Ah - 300Ah (4.8kWh - 14.4kWh)',
    powerOutput: '5kW - 15kW Standard Rack',
    cycleLife: '6,000+ Cycles @ 80% DoD',
    voltageRange: '48V / 51.2V DC Nominal',
    coolingSystem: 'Passive Convection & Smart Forced Air',
    efficiency: '97.5% Round-Trip Efficiency',
    badge: 'MISSION CRITICAL',
    badgeColor: 'bg-[#565e74] text-white',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Standard 19-inch rack-mount chassis for telecom towers & shelters',
      'Uninterrupted 48V DC power delivery during grid outages and micro-outages',
      'Wide operating temperature performance (-20°C to +60°C)',
      'Intelligent SNMP / RS485 / CAN communication for remote tower monitoring'
    ],
    description: 'Backup battery solutions designed to support telecom towers, communication networks, and critical connectivity infrastructure.',
    dimensions: '19" 3U / 4U Rack Chassis (442mm x 480mm x 178mm)',
    certifications: ['Telcordia GR-3150', 'UL 1973', 'CE', 'IEC 62619']
  },
  {
    id: 'bess-utility',
    name: 'Battery Energy Storage Systems (BESS)',
    category: 'utility',
    subtitle: 'Grid Balancing & Renewable Integration',
    capacity: '2.4 MWh - 5.2 MWh Containerized',
    powerOutput: '1.2 MW - 2.6 MW Inversion',
    cycleLife: '8,000+ Cycles @ 80% DoD',
    voltageRange: '1,000V - 1,500V DC',
    coolingSystem: 'Precision Liquid Loop with Variable Chiller',
    efficiency: '94.5% System RTE',
    badge: 'UTILITY & INDUSTRIAL',
    badgeColor: 'bg-[#006d44] text-white',
    image: ASSETS.vStruc40,
    features: [
      'Utility-scale firming, peak-shaving, and frequency regulation',
      'Direct solar PV & wind turbine microgrid coupling',
      'Sub-50ms grid response with autonomous black-start capability',
      'Integrated NFPA 855 fire protection and multi-spectral sensors'
    ],
    description: 'Flexible energy storage solutions designed to help manage power demand, support renewable energy integration, and improve energy utilization across commercial facilities, industrial sites, and renewable projects.',
    dimensions: '20ft ISO or 40ft High-Cube containerized architecture',
    certifications: ['UL 9540', 'UL 9540A', 'NFPA 855', 'IEC 62933', 'IEEE 1547']
  },
  {
    id: 'lead-replacement',
    name: 'Lead Replacement Solutions',
    category: 'ci',
    subtitle: 'Drop-In Lithium Replacement for Lead-Acid',
    capacity: '12V / 24V / 48V (50Ah - 200Ah)',
    powerOutput: '1.2kW - 10kW Drop-In',
    cycleLife: '4,000 - 5,000 Cycles (5x vs Lead-Acid)',
    voltageRange: '12.8V / 25.6V / 51.2V DC',
    coolingSystem: 'Maintenance-Free Sealed Convection',
    efficiency: '98% Energy Efficiency (vs 70% Lead-Acid)',
    badge: 'DROP-IN UPGRADE',
    badgeColor: 'bg-[#52f2a7] text-[#002111]',
    image: ASSETS.vModEdge,
    features: [
      'Direct drop-in replacement for BCI Group 24, 27, 31, 8D lead-acid batteries',
      '70% lighter weight with 2x usable energy at identical footprint',
      'Zero maintenance: no acid fumes, no water topping, no terminal sulfation',
      'Internal BMS with over-charge, over-discharge, and temperature protection'
    ],
    description: 'Modern battery alternatives for suitable applications where improved energy efficiency, reduced maintenance, or different performance characteristics are required.',
    dimensions: 'Standard BCI group dimensions & custom industrial enclosures',
    certifications: ['UN 38.3', 'CE', 'RoHS', 'UL 1642']
  }
];

export const INDUSTRIES = [
  {
    id: 'electric-mobility',
    name: 'Electric Mobility',
    shortDesc: 'Supporting the growing demand for battery-powered transportation and electric mobility solutions.',
    icon: 'electric_car',
    image: 'https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&q=80&w=1000',
    keyApplications: ['Commercial Electric Fleets', 'Electric Buses & Trucks', 'Last-Mile Delivery Vehicles', 'Specialized Off-Highway EV Platforms'],
    highlight: 'High power density and fast charge acceptance for demanding duty cycles.'
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    shortDesc: 'Helping maintain network reliability through dependable backup power solutions for communication infrastructure.',
    icon: 'cell_tower',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    keyApplications: ['5G Telecom Tower Sites', 'Remote Central Offices', 'Fiber Optic Repeater Hubs', 'Emergency Broadcasting Stations'],
    highlight: 'Compact 48V rack architectures ensuring zero network downtime.'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    shortDesc: 'Supporting solar and other renewable energy installations with energy storage solutions designed for suitable applications.',
    icon: 'solar_power',
    image: ASSETS.productsHero,
    keyApplications: ['Utility-Scale Solar Farms', 'Commercial Rooftop PV', 'Wind Generation Smoothing', 'Microgrid Energy Islanding'],
    highlight: 'Arbitrage solar peak generation and smooth intermittency into firm dispatchable power.'
  },
  {
    id: 'industrial-commercial',
    name: 'Industrial and Commercial Power',
    shortDesc: 'Addressing energy storage and backup power requirements for commercial buildings, industrial facilities, and critical equipment.',
    icon: 'factory',
    image: ASSETS.heavyManufacturing,
    keyApplications: ['Manufacturing Plants', 'Hyperscale Data Centers', 'Cold Storage & Food Logistics', 'Hospitals & Critical Campuses'],
    highlight: 'Demand charge reduction, peak shaving, and sub-50ms uninterruptible failover.'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    shortDesc: 'Supporting the development of resilient power systems for modern infrastructure and energy management applications.',
    icon: 'account_tree',
    image: ASSETS.homeHero,
    keyApplications: ['EV Fast Charging Hubs', 'Rail & Transit Signaling', 'Port & Marine Terminals', 'Smart Municipal Microgrids'],
    highlight: 'Resilient grid edge infrastructure designed for 20-year operational horizons.'
  }
];

export const TECH_PILLARS = [
  {
    id: 'battery-tech',
    title: 'Battery Technology',
    tag: 'Advanced Chemistries',
    description: 'Exploring battery technologies suited to different power, capacity, lifecycle, and operational requirements.',
    detail: 'From high-cycle, thermally stable Lithium Iron Phosphate (LiFePO4) to high-density solid-state research, we select and configure battery chemistries specifically tailored to operational profiles.',
    icon: 'battery_charging_full',
    metrics: '8,000+ Cycle Lifespan @ 80% DoD'
  },
  {
    id: 'bms',
    title: 'Battery Management Systems (BMS)',
    tag: 'Intelligent Control',
    description: 'Battery management technologies can help monitor battery conditions and support safe, efficient operation when integrated into appropriate systems.',
    detail: 'Continuous cell-level telemetry tracks voltage, temperature, internal resistance, state-of-charge (SoC), and state-of-health (SoH) with active multi-tier balancing algorithms.',
    icon: 'developer_board',
    metrics: 'Sub-Millivolt Cell Voltage Precision'
  },
  {
    id: 'storage-integration',
    title: 'Energy Storage Integration',
    tag: 'System Orchestration',
    description: 'Solutions designed to work within broader energy systems, including renewable power generation and backup power infrastructure.',
    detail: 'Seamless interconnectivity with inverters, SCADA protocols (Modbus, DNP3, IEC 61850), building management systems, and utility grid controls.',
    icon: 'hub',
    metrics: 'Sub-50ms Automatic Transfer Switch'
  },
  {
    id: 'safety-reliability',
    title: 'Safety and Reliability',
    tag: 'Rigorous Verification',
    description: 'Emphasizing the importance of suitable system design, operating conditions, protection mechanisms, and battery lifecycle management.',
    detail: 'Multi-layer mechanical enclosures, non-propagation cell barriers, NFPA-compliant gas detection, and automated aerosol fire suppression for peace of mind.',
    icon: 'verified_user',
    metrics: 'UL 9540 & UL 9540A Verified'
  }
];

export const WHY_AXIWATT = [
  {
    id: 'reliability',
    title: 'Reliability First',
    subtitle: 'Dependable Power & Consistent Operation',
    description: 'Solutions designed and developed around the power requirements of each application. We prioritize long-term durability and uptime so your operations never skip a beat.',
    icon: 'verified'
  },
  {
    id: 'technology',
    title: 'Technology-Driven Approach',
    subtitle: 'Innovation in Energy Storage',
    description: 'A focus on evolving battery technologies and energy storage innovation. We stay at the cutting edge of cell physics, intelligent BMS firmware, and system efficiency.',
    icon: 'memory'
  },
  {
    id: 'customer',
    title: 'Customer-Centric Solutions',
    subtitle: 'Application-Specific Requirements',
    description: 'Products and services aligned with specific operational and infrastructure requirements. Our application engineering team designs solutions to match exact site demands.',
    icon: 'settings_suggest'
  },
  {
    id: 'sustainability',
    title: 'Sustainability Focus',
    subtitle: 'Responsible Lifecycle Management',
    description: 'Supporting energy efficiency and responsible battery lifecycle management. From ethical material sourcing to closed-loop recycling and second-life deployment.',
    icon: 'eco'
  }
];


export const FACILITIES: FacilityLocation[] = [
  {
    id: 'na-hq',
    name: 'North America HQ & Innovation Center',
    type: 'Headquarters & Systems Lab',
    address: 'Silicon Valley Tech Center, San Jose, CA',
    coordinates: '37.3382° N, 121.8863° W',
    image: ASSETS.contactMap,
    status: 'Operational 24/7',
    uptime: '99.99%',
    outputPower: '1.2 GW Deployed'
  },
  {
    id: 'eu-factory',
    name: 'European Giga-Factory 01',
    type: 'High-Volume Robotic Assembly',
    address: 'Industrial Hub West, Berlin, Germany',
    coordinates: '52.5200° N, 13.4050° E',
    image: ASSETS.factoryHero,
    status: '100% Renewable Active',
    uptime: '99.98%',
    outputPower: '2.4 GW Capacity'
  },
  {
    id: 'apac-logistics',
    name: 'Asia-Pacific Logistics & Cell Hub',
    type: 'Supply Chain & Material Quality',
    address: 'Marina Bay Corporate, Singapore',
    coordinates: '1.3521° N, 103.8198° E',
    image: ASSETS.gridConsolidation,
    status: 'Active Distribution',
    uptime: '100%',
    outputPower: '850 MW Transit'
  }
];

export const ESG_REPORTS: EsgReport[] = [
  {
    id: 'rep-2024',
    title: '2024 Sustainability Report',
    icon: 'description',
    size: 'PDF · 12MB',
    description: 'Full analysis of our progress toward Net Zero, closed-loop hydrometallurgical recycling, and circularity goals.',
    year: 2024
  },
  {
    id: 'dei-roadmap',
    title: 'Social Impact & DEI Roadmap',
    icon: 'diversity_3',
    size: 'PDF · 8MB',
    description: 'Workforce demographics, community clean-energy engagement initiatives, and safety training benchmarks.',
    year: 2024
  },
  {
    id: 'supplier-code',
    title: 'Supplier Code of Conduct',
    icon: 'policy',
    size: 'PDF · 5MB',
    description: 'Mandatory ethical sourcing standards, conflict-free cobalt elimination, and zero-carbon transport pledges.',
    year: 2024
  }
];
