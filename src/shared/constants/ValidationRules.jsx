export const validationRules = {
  firstName: {
    required: "First name is required",
    minLength: { value: 2, message: "Must be at least 2 characters" },
    maxLength: { value: 50, message: "Must be less than 50 characters" },
    pattern: {
      value: /^[A-Za-z\s'-]+$/,
      message: "Please enter a valid name",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: { value: 2, message: "Must be at least 2 characters" },
    maxLength: { value: 50, message: "Must be less than 50 characters" },
    pattern: {
      value: /^[A-Za-z\s'-]+$/,
      message: "Please enter a valid name",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^[0-9]{10,15}$/,
      message: "Please enter a valid phone number",
    },
  },
  password: {
    required: "Password is required",
    minLength: { value: 8, message: "Must be at least 8 characters" },
  },
  confirmPassword: (watch) => ({
    required: "Confirm Password is required",
    validate: (value) =>
      value === watch("password") || "Passwords do not match",
  }),
};

export const formatDate = (dateString) => {
  if (!dateString || dateString === "0001-01-01T00:00:00") {
    return "Not Available";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
