export const crewMember = {
  crewMemberId: '324323223',
  name: 'bob',
  hourlyRate: 23.5,
  discipline: 'wood',
  siteHistory: ['123232', '12321123'],
};

export const crew = [
  {
    crewId: '32423233223',
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
];

const site = [
  {
    siteId: '123-12321-12312-121',
    jobNumber: 1,
    name: '32nd ave parking lot',
    location: [45, 23],
    clusterId: '12321',
    projectedHours: 10,
    hoursCompleted: 3,
    discipline: 'concrete',
    assignedCrew: null,
    crewMemberCount: 20,
    startTime: [12321931, 3232323],
    scheduledTime: [2323423, 23432232],
    status: 'pending',
    clientContactInfo: {
      phoneNumber: 234232323,
      email: 'blah@gmail.com',
    },
    subContractorInfo: {
      phoneNumber: 1232121212,
      email: 'subcontractor@gmail.com',
      scheduleDate: 23233232232,
    },
    attachments: ['attachments.pdf'],
    notes: '',
  },
];
