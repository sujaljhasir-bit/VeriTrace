export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateClaim(claim) {
  if (!claim) return { valid: false, error: "Claim cannot be empty" };
  if (claim.length < 10)
    return { valid: false, error: "Claim must be at least 10 characters" };
  if (claim.length > 500)
    return { valid: false, error: "Claim must be less than 500 characters" };
  return { valid: true };
}

export function validatePassword(password) {
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
}
