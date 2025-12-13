export var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["DEPOSIT"] = 0] = "DEPOSIT";
    TransactionType[TransactionType["WITHDRAWAL"] = 1] = "WITHDRAWAL";
    TransactionType[TransactionType["TRANSFER"] = 2] = "TRANSFER";
})(TransactionType || (TransactionType = {}));
