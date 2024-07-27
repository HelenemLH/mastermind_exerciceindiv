function isValidProposition(proposition, colors) {
    return proposition.length === 2 && proposition.every(color => colors.includes(color));
}


