import { User } from '../app/models/user.model';

export const data: User[] = [
  {
    name: 'Ali',
    password: '12345678',
    email: 'ali@gmail.com',
    phone: '9085858585',
    organizationName: 'AccioJob',
    organizationId: '001',
    designation: 'Software Engineer',
    birthDate: new Date('2000-05-29'),
    city: 'Guwahati',
    pincode: '787878',
  },
  {
    name: 'Khan',
    password: '12345678',
    email: 'khan@gmail.com',
    phone: '9583429333',
    organizationName: 'Buyogo',
    organizationId: '002',
    designation: 'Frontend Developer',
    birthDate: new Date('1985-07-20'),
    city: 'Delhi',
    pincode: '941058',
  },
  {
    name: 'Alice',
    password: '12345678',
    email: 'alicej@example.com',
    phone: '1234567890',
    organizationName: 'Solvei8',
    organizationId: '003',
    designation: 'Full Stack Developer',
    birthDate: new Date('1992-03-08'),
    city: 'Hyderabad',
    pincode: '606013',
  },
  {
    name: 'Bob',
    password: '12345678',
    phone: '9583429333',
    organizationName: 'Google',
    organizationId: '004',
    designation: 'Software Developer',
    birthDate: null,
    city: 'Mombai',
    pincode: '900015',
  },
];

export const allowedOrganizations = [
  { orgId: '001', orgName: 'AccioJob' },
  { orgId: '002', orgName: 'Buyogo' },
  { orgId: '003', orgName: 'Solvei8' },
  { orgId: '004', orgName: 'Google' },
];

export const designations = [
  {
    id: '1',
    name: 'Software Engineer',
  },
  {
    id: '2',
    name: 'Frontend Developer',
  },
  {
    id: '3',
    name: 'Backend Developer',
  },
  {
    id: '4',
    name: 'Full Stack Developer',
  },
  {
    id: '5',
    name: 'Software Developer',
  },
];