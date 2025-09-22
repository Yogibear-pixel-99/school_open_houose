

// A regex to validate a email address input.
export const mailRegex = /^[A-Za-z0-9._-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

// A regex to validate a german name, just letters, number and whitespaces.
export const nameRegex = /^[a-zA-ZäöüÄÖÜß0-9 ]*$/;

// A regex to validate a german text. Just letters, numbers, whitespaces and normal punctuation marks.
export const messageRegex = /^[a-zA-ZäöüÄÖÜß0-9 .,;:!?'"\-–—_+=\/\\|@#$%^&*~`]*$/;