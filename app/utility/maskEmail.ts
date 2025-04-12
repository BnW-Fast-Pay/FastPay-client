const maskEmail = (email: string) => {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1];
    return `${maskedLocalPart}@${domain}`;
};

export default maskEmail;