export default function useHelpers() {
    const formatPrice = (price?: number | null) => {
        const defaultCurrency = 'TRY'

        return price ? new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: defaultCurrency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price) : undefined
    }

    return {
        formatPrice
    }
}