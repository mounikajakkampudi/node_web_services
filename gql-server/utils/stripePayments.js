const Stripe = require('stripe');
const config = require('../config/config');
const uuidv4 = require('uuid/v4');
const stripe = Stripe(config.stripe_secret_key);

async function paymentCheckout(body) {
    console.log("Inside paymentCheckout =");
    try {
        const {
            product,
            quantity,
            currency = 'usd',
            description,
            stripeEmail,
            stripeToken,
            stripeTokenType,
        } = body;

        // TODO: Assert not a CSRF.

        let amount;
        if (product === 'one-for-five') {
            amount = quantity * 500;
        } else if (product === 'two-for-nine') {
            amount = quantity * 900;
        }

        // TODO: Lookup existing customer or create a new customer.
        // TODO: Save relevant billing and shipping address information.
        const customer = await stripe.customers.create({
            email: stripeEmail,
            source: stripeToken,
            metadata: {
                userId: '1',
            },
        });

        if (stripeTokenType === 'card') {
            const idempotency_key = uuidv4();
            const charge = await stripe.charges.create({
                amount,
                currency: currency,
                customer: customer.id,
                description: description,
            }, {
                idempotency_key,
            });
            return {error:null, charge:charge};
        } else {
            return {error:"Please use credit card for payment", charge:null};
        }
    } catch (err) {
        return {error:err, charge:null};
    }
};

async function fetchBalance(data) {
    console.log("Inside fetchBalance =");
    try {
        const data = await stripe.balance.retrieve();
        return {error:null, data:data};
    } catch (err) {
        return {error:err, data:null};
    }
};

async function fetchBalanceTransactions(data) {
    try {
        const data = await stripe.balance.listTransactions({ limit: 100 });
        return {error:null, data:data};
    } catch (err) {
        return {error:err, data:null};
    }
};

module.exports = {
    paymentCheckout,
    fetchBalance,
    fetchBalanceTransactions
}