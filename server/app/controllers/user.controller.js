exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.memberBoard = (req, res) => {
    res.status(200).send("Charity Member Content.");
};

exports.beneficiaryBoard = (req, res) => {
    res.status(200).send("Beneficiary Content.");
};