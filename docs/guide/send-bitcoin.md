# Send Bitcoin

A step-by-step guide on how to safely send Bitcoin using Bitcoin USB Wallet.

## Pre-Transfer Preparations

### ⚠️ Important Checklist
- **Verify the recipient address carefully** - Bitcoin transfers cannot be cancelled once sent
- **Test with small amounts first** - We recommend testing with small amounts before sending large sums

## Step 1: Open Wallet

### 1. Enter Bitcoin Transfer Menu

Click the **"Send Bitcoin"** button on the main screen.

### 2. Load Wallet File

1. Click the **"Select"** button to choose a wallet file
2. In the file explorer, find and select the wallet file (`.wallet`) you want to use
3. Enter the **wallet password**
4. Click the **"Load Wallet"** button

### 3. Check Balance

When the wallet is successfully loaded:
- **Public address** is displayed
- **Balance** field appears (initial value: 0 BTC)
- Click the **"Query"** button to check actual balance

> 💡 **Important**: Internet connection is required for balance inquiry, and you must check balance before sending Bitcoin.

### 4. Check Transaction History (Optional)

Click the **"View History"** button:
- External block explorer website opens
- You can check all transaction history for that address
- View deposit/withdrawal history and timestamps

## Step 2: Send Bitcoin

### 1. Enter Recipient Address

Enter the Bitcoin address of the recipient in the **"Recipient Address"** field.

> ✅ **Recommendations**: 
> - Enter address using copy-paste (Ctrl+C, Ctrl+V)
> - Manual input has high risk of mistakes
> - Double-check the first few and last few characters after input

### 2. Confirm Network

**Network**: Bitcoin (Fixed)
- This program supports only Bitcoin mainnet

### 3. Select Transfer Fee

Choose one of the **"Transfer Fee"** options:

| Option | Expected Processing Time | Recommended Situation |
|--------|-------------------------|----------------------|
| **Slow** | 1+ hours | Non-urgent transfers |
| **Normal** | 30min-1 hour | Regular transfers |
| **Fast** | 10-30 minutes | When fast processing needed |
| **Very Fast** | Within 10 minutes | Emergency transfers |
| **Custom** | User setting | For advanced users |

> 📌 **Fee Structure**:
> - Developer fee: 0.00001 BTC (fixed)
> - Remaining fee: Paid to Bitcoin network miners
> - Total fee = Developer fee + Network fee

### 4. Enter Transfer Amount

Enter the amount to send in the **"Bitcoin to Send"** field.

#### Direct Input
- Enter numbers directly (e.g., 0.05)
- Up to 8 decimal places allowed

#### Button Input
Shortcut buttons for convenience:
- **+0.1 BTC** - Add 0.1 Bitcoin
- **+0.01 BTC** - Add 0.01 Bitcoin
- **+0.001 BTC** - Add 0.001 Bitcoin
- Click buttons multiple times to set desired amount

> ⚠️ **Caution**: You cannot send more than your balance

### 5. Execute Transfer

1. Double-check all information:
   - ✓ Is the recipient address correct?
   - ✓ Is the transfer amount correct?
   - ✓ Is the fee appropriate?

2. Click the **"Send Bitcoin"** button

3. When transfer is complete:
   - "Transfer Complete" message appears

## Post-Transfer Confirmation

### Transaction Verification Methods
1. Click the history button to check transfer records
2. Click the balance inquiry button to check balance

## Frequently Asked Questions

### Q: Can I cancel a transfer?
A: No. Bitcoin transactions cannot be cancelled once sent. Always verify the address before sending.

### Q: How long should I wait?
A: It depends on the fee option you selected. It may take longer when the network is congested.

## Troubleshooting

### When transfer fails
1. Check if balance is sufficient (transfer amount + fee)
2. Verify recipient address format is correct
3. Check internet connection status
4. Restart program and try again

### When transaction takes too long
- Check transaction status on block explorer
- Fee might have been too low
- Check network congestion

---

**💡 Final Tip**: Bitcoin transfers are irreversible. Always be careful and develop the habit of testing with small amounts initially.