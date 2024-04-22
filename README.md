# Introduction

As part of Backpack’s application process we would like to see a sample of your work. This prompt should take between 10 - 15 hours to complete.

Design choices and screenshots at the bottom.

## Prompt

Backpack is a financial institution that at its core deals with bank accounts, balances, and transactions. In this prompt you will build a UI that displays a customer’s bank account and routing numbers, available and pending balances, and transactions.

Please create a separate repository for this prompt and commit your work as you go. When you are ready for us to review your work, give us access to your repository.

If you have any questions please ask!

## Tech Stack

The web application must be build using React. The rest is up to you.

## Requirements

- [x]  UI for displaying, concealing, and copying account and routing numbers
- [x]  UI for displaying the current and available balance
- [x]  UI for displaying transactions
- [x]  `README` explaining your design choices and how to run the application

## Extras

- [x]  Reusable components
- [x]  Polished UI and styling
- [x]  Filter and search for transactions
- [x]  Mobile friendly
- [ ]  Tests

## API

💡 The base path for the API is [**https://api.dev.backpackpay.com/api/v1/mocks**](https://api.dev.backpackpay.com/api/v1/mocks)

### `GET /bank-accounts`

Get an account owner’s bank accounts.

**Response Body**

```json
{
    data: {
        bank_accounts: [
            {
                id,
                created_at,
                updated_at,
                status,
                name,
                account_number,
                routing_number
            }
        ],
    },
    request_id
}
```

### `GET /bank-accounts/:bank_account_id/balance`

Get a bank account’s balance.

**Response Body**

```json
{
    data: {
        bank_account_balance: {
            bank_account_id,
            available_balance_in_cents,
            pending_balance_in_cents
        }
    },
    request_id
}
```

### `GET /transactions`

Get an account owner’s transactions.

**Response Body**

```json
{
    data: {
        transactions: [
            {
                id,
                created_at,
                updated_at,
                type,
                date,
                description,
                amount_in_cents,
            }
        ]
    },
    request_id
}
```

💡 All debits have `amount_in_cents < 0` and credits have `amount_in_cents >= 0`

## Design System

### Core

| Name | HEX |
| --- | --- |
| Primary | #033AFC |
| Secondary | #24305B |

### Shades

| Name | HEX |
| --- | --- |
| White | #FFFFFF |
| Black | #000000 |
| Dark Grey | #5E5E5E |
| Light Grey | #CFCFCF |

### Warning Colors

| Name | HEX |
| --- | --- |
| Red | #C44E42 |
| Yellow | #FFCF20 |
| Green | #608D64 |

### Fonts

| Type | Size | Weight |
| --- | --- | --- |
| H1 | 48 | Bold |
| H2 | 38 | Bold |
| H3 | 30 | Bold |
| Body | 16 | Regular |
| Label | 14 | Light |
| Info | 12 | Light |

*font-family: Montserrat*


## How to Run

## Pre-Requisites
Requires node 21 or higher to run. I'm using `nvm` to manage my node versions but you can also use volta or manage it manually.

## Steps
1. Create a `.env.local` file in the root directory and add `NEXT_PUBLIC_API_ROOT=https://api.dev.backpackpay.com/api/v1/mocks`
1. Run `npm i`
1. Run `npm run dev`
1. Application should be running on port 3000

## Design Choices
1. **NextJS** -
    One of the requirements for this project was that it was built on React. Since `create-next-app` is now the recommended choice to use React by the React Core team, I used it. It also provides a lot of built-in tools like routing which saved time. Because of the nature of the project, I did not take SEO into consideration although it is one of the benefits of using NextJS.
1. **TypeScript** -
    TypeScript has quickly become the preferred language for startups since it can help engineer avoid mistakes and bugs at runtime. I created some basic types based on the API responses.
1. **Tailwind CSS** -
    I like Tailwind for prototyping quickly. I even used it at my last job and in my current side project. It makes it easy to have light/dark modes and to develop for desktop and mobile. The colors and design system are also easy to customize. My other choice would've been Styled-Components but that would've taken me longer
1. **Shadcn-ui** -
    In the spirit of speed, I used shadcn-ui components. They're easy to customize and make developing accessible components faster. I build some components from scratch and used shadcn-ui as a base for others. I took some icons from radix-ui as well. They're both compatible with Tailwind.

    ### Transactions

    #### Desktop
    ![transactions page on desktop](/public/image.png)

    #### Mobile
![transactions page on mobile](/public/image-4.png)

    ### Bank Accounts

    #### Desktop
    ![bank account card on desktop](/public/image-1.png)

    #### Mobile
    ![bank account card on mobile](/public/image-2.png)