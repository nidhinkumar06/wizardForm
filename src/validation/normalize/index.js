export const mobile = (value) => value.replace(/[^\d]/g, '').slice(0, 10);

export const captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);

export const upper = (value) => value && value.toUpperCase();

export const age = (value) => value.replace(/[^\d]/g, '').slice(0, 3);

export const aadhaar = (value) => value.replace(/[^\d]/g, '').slice(0, 12);

export const pan = (value) =>
  value
    .replace(/[^\w]/g, '')
    .slice(0, 10)
    .toUpperCase();

export const salary = (value) => value.replace(/[^\d]/g, '').slice(0, 7);

export const commission = (value) => value.replace(/[^\d]/g, '').slice(0, 3);
