export const crewMembers = {
  crewMemberId: '324323223',
  name: 'bob',
  hourlyRate: 23.5,
  discipline: 'wood',
  siteHistory: ['123232', '12321123'],
};

export const crews = [
  {
    crewId: '1',
    crewName: 'eagle run',
    crewSize: 4,
    crewWeeklyHours: 10,
    crewWeeklyCapacity: 20,
    discipline: 'concrete',
    foremanInfo: {
      name: 'manager name',
      phone: 13122121,
      email: 'foreman@gmail.com',
    },
    crewMemberIds: ['324323223', '124323'],
    crewHourlyCost: 30,
    equipmentHourlyCost: 100,
  },
  {
    crewId: '2',
    crewName: 'Pigeon',
    crewSize: 2,
    crewWeeklyHours: 15,
    crewWeeklyCapacity: 20,
    discipline: 'asphalt',
    foremanInfo: {
      name: 'manager name',
      phone: 13122121,
      email: 'foreman@gmail.com',
    },
    crewMemberIds: ['324323223', '124323'],
    crewHourlyCost: 30,
    equipmentHourlyCost: 100,
  },
  {
    crewId: '3',
    crewName: 'Sparrow',
    crewSize: 8,
    crewWeeklyHours: 10,
    crewWeeklyCapacity: 20,
    discipline: 'striping',
    foremanInfo: {
      name: 'manager name',
      phone: 13122121,
      email: 'foreman@gmail.com',
    },
    crewMemberIds: ['324323223', '124323'],
    crewHourlyCost: 30,
    equipmentHourlyCost: 100,
  },
];

export type Phase = {
  crewEstimatedHours: number | null;
  discipline: string;
  assignedCrewId: string | null;
  crewMemberCount: number | null;
  startDateTime: [number, number] | null;
  scheduledDateTime: [number, number] | null;
  status: string;
  subContractorInfo: {
    phoneNumber: number;
    email: string;
    scheduledDate: number;
  };
  mobilizationFrom: [number, number] | null;
  estimatedMobilizationTime: number | null;
  actualMobilizationTime: number | null;
};

export type Site = {
  siteId: string;
  jobNumber: string;
  name: string;
  location: [number, number];
  clusterId: string;
  totalEstimatedHours: number;
  clientContactInfo: {
    phoneNumber: number;
    email: string;
  };
  attachments: string[];
  notes: string;
  phase: Phase[];
};

export const sites: Site[] = [
  {
    siteId: '1',
    jobNumber: '1',
    name: '32nd ave parking lot',
    location: [51.515, -0.081],
    clusterId: '12321',
    totalEstimatedHours: 120,
    // totalHoursCompleted: 10,
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    attachments: ['attachments.pdf'],
    notes: 'we are falling behind on schedule',
    phase: [
      {
        crewEstimatedHours: 10,
        // crewHoursCompleted: 3,
        discipline: 'concrete',
        assignedCrewId: '1',
        crewMemberCount: 20,
        startDateTime: [12321931, 3232323],
        scheduledDateTime: [2323423, 23432232],
        status: 'In Progress',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: [51.515, -0.095],
        estimatedMobilizationTime: 23343223,
        actualMobilizationTime: 23343223,
      },
      {
        crewEstimatedHours: null,
        // crewHoursCompleted: 3,
        discipline: 'asphalt',
        assignedCrewId: null,
        crewMemberCount: null,
        startDateTime: null,
        scheduledDateTime: null,
        status: 'Pending',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: null,
        estimatedMobilizationTime: null,
        actualMobilizationTime: null,
      },
      {
        crewEstimatedHours: null,
        // crewHoursCompleted: 3,
        discipline: 'striping',
        assignedCrewId: null,
        crewMemberCount: null,
        startDateTime: null,
        scheduledDateTime: null,
        status: 'pending',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: null,
        estimatedMobilizationTime: null,
        actualMobilizationTime: null,
      },
    ],
  },
  {
    siteId: '2',
    jobNumber: '2',
    name: 'McDonalds',
    location: [51.515, -0.094],
    clusterId: '12321',
    totalEstimatedHours: 120,
    // totalHoursCompleted: 10,
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    attachments: ['attachments.pdf'],
    notes: 'we are falling behind on schedule',
    phase: [
      {
        crewEstimatedHours: 10,
        // crewHoursCompleted: 3,
        discipline: 'concrete',
        assignedCrewId: '1',
        crewMemberCount: 20,
        startDateTime: [12321931, 3232323],
        scheduledDateTime: [2323423, 23432232],
        status: 'Completed',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: [51.515, -0.095],
        estimatedMobilizationTime: 23343223,
        actualMobilizationTime: 23343223,
      },
      {
        crewEstimatedHours: 13,
        // crewHoursCompleted: 3,
        discipline: 'asphalt',
        assignedCrewId: '2',
        crewMemberCount: 20,
        startDateTime: [12321931, 3232323],
        scheduledDateTime: [2323423, 23432232],
        status: 'In Progress',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: [51.515, -0.095],
        estimatedMobilizationTime: 23343223,
        actualMobilizationTime: 23343223,
      },
    ],
  },
  {
    siteId: '3',
    jobNumber: '3',
    name: 'Coke',
    location: [51.535, -0.096],
    clusterId: '12321',
    totalEstimatedHours: 120,
    // totalHoursCompleted: 10,
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    attachments: ['attachments.pdf'],
    notes: 'we are falling behind on schedule',
    phase: [
      {
        crewEstimatedHours: null,
        // crewHoursCompleted: 3,
        discipline: 'asphalt',
        assignedCrewId: null,
        crewMemberCount: null,
        startDateTime: null,
        scheduledDateTime: null,
        status: 'In Progress',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: null,
        estimatedMobilizationTime: null,
        actualMobilizationTime: null,
      },
    ],
  },
  {
    siteId: '4',
    jobNumber: '4',
    name: 'Water World',
    location: [51.545, -0.089],
    clusterId: '12321',
    totalEstimatedHours: 120,
    // totalHoursCompleted: 10,
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    attachments: ['attachments.pdf'],
    notes: 'we are falling behind on schedule',
    phase: [
      {
        crewEstimatedHours: null,
        // crewHoursCompleted: 3,
        discipline: 'asphalt',
        assignedCrewId: null,
        crewMemberCount: null,
        startDateTime: null,
        scheduledDateTime: null,
        status: 'In Progress',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: null,
        estimatedMobilizationTime: null,
        actualMobilizationTime: null,
      },
    ],
  },
  {
    siteId: '5',
    jobNumber: '5',
    name: 'Apple Store',
    location: [51.505, -0.09],
    clusterId: '12321',
    totalEstimatedHours: 120,
    // totalHoursCompleted: 10,
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    attachments: ['attachments.pdf'],
    notes: 'we are falling behind on schedule',
    phase: [
      {
        crewEstimatedHours: 10,
        // crewHoursCompleted: 3,
        discipline: 'concrete',
        assignedCrewId: '1',
        crewMemberCount: 20,
        startDateTime: [12321931, 3232323],
        scheduledDateTime: [2323423, 23432232],
        status: 'Completed',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: [51.515, -0.095],
        estimatedMobilizationTime: 23343223,
        actualMobilizationTime: 23343223,
      },
      {
        crewEstimatedHours: 12,
        // crewHoursCompleted: 3,
        discipline: 'asphalt',
        assignedCrewId: '2',
        crewMemberCount: 30,
        startDateTime: [12321931, 3232323],
        scheduledDateTime: [2323423, 23432232],
        status: 'Completed',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: [51.535, -0.097],
        estimatedMobilizationTime: 23343223,
        actualMobilizationTime: 23343223,
      },
      {
        crewEstimatedHours: 10,
        // crewHoursCompleted: 3,
        discipline: 'striping',
        assignedCrewId: '3',
        crewMemberCount: null,
        startDateTime: null,
        scheduledDateTime: null,
        status: 'pending',
        subContractorInfo: {
          phoneNumber: 1232121212,
          email: 'subcontractor@gmail.com',
          scheduledDate: 23233232232,
        },
        mobilizationFrom: null,
        estimatedMobilizationTime: null,
        actualMobilizationTime: null,
      },
    ],
  },
];
