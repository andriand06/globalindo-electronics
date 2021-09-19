const FormatNumber = (number) => {
    return Intl.NumberFormat("id-ID").format(number);
}

export default FormatNumber;