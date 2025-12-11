# Critters Quest $QUEST Tokenomics
## Complete Token Distribution & Economics Overview

---

## Executive Summary

**Total Supply:** 4,089,481,331 QUEST (~4.09B)  
**Burned Before TGE:** 5,910,518,669 QUEST (59.1% of original 10B supply)  
**Distribution Model:** Fair launch via SOV-style mining with Master Edition contributor rewards

---

## Token Allocation Breakdown

```
TOTAL SUPPLY: 4,089,481,331 QUEST (4.09B)

├─ Master Editions (Bound): 2,380,533,198 QUEST (58.2%)
│   └─ Distributed to 3,500 NFT holders via Token-Bound Accounts
│   └─ Cannot be dumped (bound to NFTs until unlocked)
│
├─ SOV Mining Pool: 500,000,000 QUEST (12.2%)
│   └─ SOURCE: Unlocked from Master Editions via Genesis Quest staking
│   └─ Contributors earn 1% of ALL mining SOL revenue perpetually
│   └─ Distributed over 6+ months via mining protocol
│
├─ Genesis Quest Rewards: 100,000,000 QUEST (2.4%)
│   └─ For current ME stakers
│   └─ Earned through time-locked staking
│
├─ Marketing/Partners/CEX: 200,000,000 QUEST (4.9%)
│   └─ Strategic partnerships only
│   └─ CEX listings
│   └─ Ecosystem growth
│
└─ Team: 408,948,133 QUEST (10.0%)
    └─ 6-month cliff + 52-week linear vesting
    └─ Aligns team with long-term success
```

---

## Burn History & Pre-TGE Burns

### Already Burned: 2,119,466,802 QUEST (21.2%)
- From bonding curve mechanism
- Early supply reduction

### Pre-TGE Burn: 3,791,051,867 QUEST (37.9%)
```
├─ DEX Allocation: 2,000,000,000 QUEST
│   └─ Not needed - SOV mining creates own liquidity
│
├─ Marketing Excess: 1,700,000,000 QUEST  
│   └─ Keeping only 200M for actual use
│
└─ Team Excess: 591,051,867 QUEST
    └─ Proportional reduction to maintain 10%
```

### Total Burned: 5,910,518,669 QUEST (59.1% of original supply)

**This is one of the largest pre-launch burns in Solana history.**

---

## Visual Token Allocation

```
┌────────────────────────────────────────────────────────────────┐
│                   CRITTERS QUEST TOKENOMICS                    │
│                    Total: 4.09B QUEST                          │
└────────────────────────────────────────────────────────────────┘

     ████████████████████████████████████████████████ 58.2%
     Master Editions (Bound to NFTs)
     2,380,533,198 QUEST
     
     ██████████ 12.2%
     SOV Mining Pool (From ME Unlocks)
     500,000,000 QUEST
     
     ████ 10.0%
     Team (6mo Cliff + Vesting)
     408,948,133 QUEST
     
     ██ 4.9%
     Marketing/Partners
     200,000,000 QUEST
     
     █ 2.4%
     Genesis Quest Rewards
     100,000,000 QUEST

     ███████████████████████████████████████████████████ 59.1%
     BURNED FOREVER
     5,910,518,669 QUEST
```

---

## Team Vesting Schedule (6-Month Cliff + 1 Year Vesting)

### Structure
```
Total Team Allocation: 408,948,133 QUEST (10%)
Cliff Period: 180 days (6 months)
Vesting Period: 52 weeks (1 year) after cliff
Weekly Unlock: 7,864,387 QUEST
Total Duration: 18 months from TGE
```

### Timeline
```
┌─────────────────────────────────────────────────────────────────┐
│                        TEAM VESTING                             │
└─────────────────────────────────────────────────────────────────┘

Month 0-6 (Cliff Period):
├─ Unlocked: 0 QUEST
├─ Team has full skin in the game
└─ Maximum alignment with project success

Month 7 (Cliff Ends):
├─ Week 1: 7,864,387 QUEST unlocks
└─ Begin weekly vesting for 52 weeks

Month 7-18 (Weekly Vesting - Full Year):
├─ Weekly: 7,864,387 QUEST
├─ Monthly: ~31,457,548 QUEST
└─ End of Month 18: 408,948,133 QUEST (100%)
```

### Dilution Impact
```
At Month 7 (First Unlock):
├─ Circulating: ~700M QUEST (after 6mo mining)
├─ Weekly unlock: 7.86M = 1.1% dilution
└─ Manageable with 6-month price discovery complete

Full Vesting Period (Month 7-18):
├─ Total team tokens: 408.9M (10% of supply)
├─ Released over 12 months: ~31.5M/month avg
├─ Gradual enough to absorb
└─ Balanced against mining emissions + game sinks
```

---

## ORE Mining Token Distribution

### Source: Master Edition Unlocked Tokens

```
┌─────────────────────────────────────────────────────────────────┐
│              MASTER EDITION → SOV MINING FLOW                   │
└─────────────────────────────────────────────────────────────────┘

Step 1: Genesis Quest Staking
├─ ME holders stake NFTs
├─ Unlock tokens at 0.1%/day + boosts
└─ Example: 200 days = 20% of bound tokens unlocked

Step 2: Contribution Phase  
├─ ME holders contribute unlocked QUEST to ORE Mining pool
├─ Contribution tracked per NFT address
└─ Total pool: ~500M QUEST

Step 3: Snapshot (Admin Lock)
├─ Admin takes snapshot of all contributions
├─ No more contributions allowed after this
└─ Total_contributed is now IMMUTABLE

Step 4: Finalization (Permissionless)
├─ Anyone can call finalize_contributor() per NFT
├─ Calculates: share_bps = (nft_contributed × 10,000) / total_contributed
├─ Example: 1M / 500M = 20 bps = 0.2% of protocol revenue
└─ share_bps is PERMANENT and IMMUTABLE

Step 5: Perpetual Revenue
├─ Each mining round: 1% of losing SOL → contributor pool
├─ Contributors claim proportional to their share_bps
├─ Revenue rights transfer with NFT if sold
└─ Earns forever as long as mining continues

Note: Separate from the 2% that goes to QUEST stakers
```

### Contributor Example
```
ME Holder with 2M QUEST bound:
├─ Stakes 300 days
├─ Unlocks: 2M × 0.1% × 300 × boost = 800K QUEST
├─ Contributes: 800,000 QUEST to mining pool
│
└─ If total pool = 500M:
    ├─ Share: 800K / 500M = 0.16% = 16 bps
    ├─ Daily mining volume: 14,400 SOL
    ├─ 1% to contributors: 144 SOL/day
    ├─ Your 0.16%: 0.23 SOL/day = $32/day
    └─ Annual: $11,680 in SOL revenue

Plus keeps: 1.2M QUEST still bound to NFT
```

---

## ORE Mining Protocol Economics

### Round Structure
```
Duration: 1 minute per round
Grid: 5x5 (25 blocks)
Mechanism: Players stake SOL on blocks, winner selected randomly
Rewards: SOL profit + QUEST emissions
```

### SOL Distribution Per Round
```
100% of SOL staked by losers distributed as:

├─ 88% → Winners (proportional to stake on winning block)
├─ 7% → Protocol Buybacks (100% burned)
├─ 2% → QUEST Stakers (proportional to staked amount)
├─ 1% → ME Contributors (proportional to contribution share)
└─ 2% → Motherlode Pool (1/625 chance jackpot)
```

### QUEST Emissions
```
Dynamic Emission Formula:
Emission per round = Treasury Balance / 525,600 minutes (1 year)

Initial Treasury: 500M QUEST (from ME contributions)
Initial Emission: 500,000,000 / 525,600 = 951 QUEST/round

Treasury depletes gradually:
├─ As more QUEST is emitted, treasury balance decreases
├─ Emission rate automatically reduces proportionally
├─ Game sinks replenish treasury (20% of burns)
└─ Becomes self-sustaining with healthy game economy

Refining Fee: 10% on QUEST claims
└─ Redistributed to unclaimed balances (rewards patience)
```

### Motherlode Mechanics
```
Accumulation: 2% of losing SOL per round
Probability: 1/625 chance per round
Distribution: Split among winning block stakers
Format: SOL only (no QUEST - reduces sell pressure)

Example:
├─ After 625 rounds at 10 SOL avg:
├─ Accumulated: 125 SOL in motherlode
├─ Trigger probability: 1/625
└─ Winners split: 125 SOL (~$17,500)
```

---

## Staking Rewards (Separate from Mining)

### QUEST Staking Benefits
```
Stake $QUEST in the ORE protocol to earn:
├─ 2% of all mining SOL volume (distributed proportionally)
└─ Passive SOL income from protocol revenue

This is separate from ME contributors who earn 1% for providing tokens.

Example with 100K QUEST staked:
├─ Total staked: 15M QUEST (presale holders + early miners)
├─ Your share: 0.67%
├─ Daily mining: 14,400 SOL
├─ 2% to stakers: 288 SOL/day
├─ Your earnings: 1.93 SOL/day = $270/day
└─ APY: ~7,000% (early phase, normalizes as more stake)
```

### Staking Strategy Incentive
```
Why stake instead of sell?
├─ Earn passive SOL income from protocol
├─ Higher early APYs (7,000%+)
├─ Reduces circulating supply (supports price)
└─ Normalizes to 1,000-3,000% APY long-term

Note: This 2% is different from the 1% ME contributors earn.
ME contributors = Provided tokens to pool, earn 1%
QUEST stakers = Anyone staking QUEST, earn 2%
```

---

## Pre-Mine Sale (Optional Bootstrap)

### Parameters
```
Amount: 20,000,000 QUEST (0.49% of supply)
Target: 2,000 SOL
Price: 10,000 QUEST per SOL = $0.014/QUEST
Source: From Genesis Quest allocation or Marketing

Distribution:
├─ 80% to LP: 1,600 SOL + 16M QUEST
│   └─ Creates initial $224K liquidity
├─ 20% to ME holders: 400 SOL
    └─ Bonus for early believers
```

### Why Small Pre-Mine?
```
✅ Minimal dilution (0.49% of supply)
✅ Creates initial liquidity for mining
✅ Sets price discovery floor at $0.014
✅ Incentivizes staking over selling (earn 2% SOL as QUEST staker)
✅ Most tokens distributed via fair mining
```

---

## Complete Token Flow Diagram

```
┌───────────────────────────────────────────────────────────────────┐
│                    $QUEST TOKEN ECOSYSTEM                         │
└───────────────────────────────────────────────────────────────────┘

                    ORIGINAL 10B SUPPLY
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    DISTRIBUTED        BURNED          REMAINING
     2.88B QUEST      2.12B QUEST     5B UNALLOCATED
          │                                 │
          │                    ┌────────────┼──────────┐
          │                    │            │          │
          │                    ▼            ▼          ▼
          │              BURNED MORE    TEAM 10%   MARKETING
          │              3.79B QUEST    409M       200M + 100M
          │                                │       Genesis
          ▼                                │
   MASTER EDITIONS                         │
   2.88B QUEST (Bound)                    │
          │                                │
          │ Genesis Quest                  │
          │ Staking (unlock)               │
          │                                │
          ▼                                │
   UNLOCKED QUEST                          │
   ~500M contributed                       │
          │                                │
          │                                │
          ▼                                ▼
   ┌──────────────────────────────────────────────────────────┐
   │              SOV MINING PROTOCOL                         │
   │                                                          │
   │  Players Stake SOL → Random Winner → Rewards            │
   │                                                          │
   │  Emissions: Treasury / 262,800 minutes                  │
   │  Initial: 1,903 QUEST/round                             │
   │                                                          │
   │  SOL Distribution:                                       │
   │  ├─ 88% Winners                                          │
   │  ├─ 7% Buybacks (BURN)                                   │
   │  ├─ 2% QUEST Stakers                                     │
   │  ├─ 1% ME Contributors                                   │
   │  └─ 2% Motherlode                                        │
   │                                                          │
   │  QUEST Flow:                                             │
   │  ├─ Winners claim QUEST (10% refining fee)              │
   │  ├─ Some stake (earn 2% SOL)                            │
   │  ├─ Some sell (buyback burns)                           │
   │  └─ Creates market liquidity                            │
   └──────────────────────────────────────────────────────────┘
                           │
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    CRITTERS 4X        STAKING          MARKET
      GAME            EARN SOL          TRADING
          │                                 │
          │ 20% of sinks                   │
          │ to treasury                    │
          │                                 │
          └─────────────┐    ┌──────────────┘
                        │    │
                        ▼    ▼
                  SUSTAINABLE LOOP
                  ├─ Game spending → 20% to Treasury
                  ├─ Buybacks → Burns (only burn)
                  ├─ Emissions → Players
                  └─ Revenue → Stakers/MEs
```

---

## Game Economy Integration

### Token Spending (In-Game)
```
Critters Quest 4X Game - players spend QUEST for:
├─ Unit purchases
├─ Building upgrades
├─ Territory expansion
├─ Speedups
└─ Competitive advantages

20% of ALL game spending → ORE Mining treasury
80% of ALL game spending → Protocol revenue

Note: Only the 7% buyback from SOV mining actually burns QUEST
```

### Example Monthly Spending
```
Game Revenue: 10M QUEST spent by players
├─ 20% (2M): Goes to mining treasury (replenishes emissions)
└─ 80% (8M): Goes to protocol revenue
    └─ 2M / 43,800 min/month = 46 QUEST/min added to emissions
    └─ Extends treasury life + rewards miners
```

### Flywheel Effect
```
More Players → More Spending → More Treasury → Higher Emissions
     ↑                                              ↓
     └──────── Attracts More Miners ←───────────────┘
```

---

## Circulating Supply Projections

### Launch (Day 0)
```
Presale: 20M QUEST (0.49%)
├─ Expected staked: 15M (75%)
└─ Actually trading: 5M QUEST

Very thin float = easy price discovery
```

### Month 1
```
Mining emissions: ~81.8M QUEST
├─ Staked: ~49M (60%)
├─ Held: ~16M (20%)
└─ Circulating: ~36.8M (45%)

Total circulating: ~42M QUEST (1% of supply)
```

### Month 3
```
Mining emissions: ~246M QUEST
├─ Staked: ~123M (50%)
├─ Held: ~74M (30%)
└─ Circulating: ~91M (37%)

Total circulating: ~96M QUEST (2.3% of supply)
```

### Month 6 (Cliff Ends)
```
Mining emissions: ~492M QUEST
Team cliff ends: 0 → Start vesting
├─ Mining staked/held: ~295M (60%)
├─ Mining circulating: ~197M (40%)
└─ Total circulating: ~202M QUEST (4.9% of supply)

Team vesting begins: ~7.86M/week added
```

### Month 12
```
Mining emissions: ~700M QUEST (treasury depleting)
Team vested: 408M QUEST (100%)
Game sinks active: +2M/month to treasury
├─ Total staked: ~450M (40%)
├─ Total held: ~300M (27%)
└─ Total circulating: ~358M (32%)

Sustainable equilibrium reached
```

---

## Deflationary Mechanics

### Buyback & Burn
```
8% of every mining round → Buy $QUEST from market
100% of bought QUEST → Permanently burned

Daily buyback budget: 1,152 SOL = $161K
Annual buyback budget: 420K SOL = $58.9M

Actual burns limited by sell pressure:
├─ Year 1: ~23.7M QUEST burned (0.58% of supply)
├─ Creates constant buy pressure
└─ Buy pressure > Sell pressure = Bullish
```

### Game Spending Flow
```
In-game QUEST spending:
├─ 20% → ORE Mining treasury (sustains emissions)
└─ 80% → Protocol revenue

If 10M QUEST spent/month in game:
├─ 2M to mining treasury
└─ 8M to protocol
```

### Deflation (Buybacks Only)
```
The ONLY burn mechanism is the 7% buyback from SOV mining:
├─ 7% of losing SOL each round → Buy QUEST from market
└─ 100% of bought QUEST → Permanently burned

Year 1 (estimated):
├─ Mining buybacks: ~23.7M QUEST burned
└─ Creates constant buy pressure + deflation

Long-term:
├─ Buybacks continue as long as mining is active
└─ Sustainable deflationary pressure
```

---

## Risk Mitigation & Safety Features

### No Rug Vectors
```
✅ 59% of supply burned before TGE
✅ No DEX allocation (can't dump on launch)
✅ Team locked 6 months + gradual vesting
✅ Marketing only 4.9% (vs typical 20-30%)
✅ No VC allocations
✅ No insider presale dumps
```

### Fair Distribution
```
✅ 70.4% to community (MEs + Mining + Genesis Quest)
✅ Mining distributed over 6+ months (not instant unlock)
✅ SOV-style protocol = provably fair randomness
✅ Anyone can participate in mining
✅ No whitelist or privileged access
```

### Sustainable Economics
```
✅ Game spending replenishes treasury (20%)
✅ Buybacks create constant demand
✅ Staking locks supply (reduces selling)
✅ Emissions decrease as treasury depletes
✅ Long-term deflationary with active game
```

### Transparency
```
✅ All burns on-chain and verifiable
✅ SOV mining is open-source
✅ Contributors tracked via immutable snapshots
✅ Team vesting enforceable by smart contract
✅ No hidden allocations
```

---

## Key Metrics Summary

| Metric | Value |
|--------|-------|
| **Total Supply** | 4,089,481,331 QUEST |
| **Burned (59.1%)** | 5,910,518,669 QUEST |
| **Community (70.4%)** | 2,880,533,198 QUEST (ME) + 600M (Mining/Genesis) |
| **Team (10%)** | 408,948,133 QUEST (6mo cliff + vesting) |
| **Marketing (4.9%)** | 200,000,000 QUEST |
| **Initial Circulating** | ~20M QUEST (0.49%) |
| **Mining Treasury** | 500M QUEST (from ME unlocks) |
| **Emission Rate** | ~951 QUEST/round initially |
| **Treasury Depletion** | ~365 days (1 year) at initial rate |
| **Buyback Rate** | 7% of round SOL → 100% burned |
| **QUEST Staker Revenue** | 2% of round SOL (proportional) |
| **ME Contributor Revenue** | 1% of round SOL (proportional) |
| **Motherlode** | 2% of round SOL (1/625 trigger) |
| **Game Spending to Treasury** | 20% of in-game spending → treasury |

---

## Why This Tokenomics Model Works

### 1. Massive Pre-Launch Burn (59%)
- Shows commitment and removes rug potential
- Tighter supply = more valuable per token
- Marketing message: "We burned more than most projects' entire supply"

### 2. Fair Launch Distribution
- 70%+ to community via NFTs and mining
- No VC dumps, no insider allocations
- SOV-style mining = provably fair

### 3. Strong Holder Incentives
- Stake to earn 2% of mining volume
- ME contributors earn perpetual SOL revenue
- Holding rewarded more than selling
- Game spending feeds treasury (20%)
- Sustainable deflationary pressure from buybacks

### 4. Deflationary Long-Term
- 7% buyback = only burn mechanism
- Game spending does not burn QUEST
- Sustainable deflationary pressure from buybacks

### 5. Team Alignment
- 6-month cliff = skin in the game
- Gradual vesting prevents dumps
- 10% allocation is industry standard

### 6. Sustainable Economics
- Game feeds treasury (20% of sinks)
- Mining creates own liquidity
- Revenue-sharing aligns all stakeholders

### 7. Multiple Revenue Streams
- Mining winners: SOL profit + QUEST rewards
- Stakers: Earn SOL from protocol volume
- ME contributors: Perpetual 1% SOL revenue
- Game players: Earn via gameplay

---

## Comparison to Other Solana Projects

| Project | Pre-Launch Burn | Team Lock | Fair Launch | Deflationary |
|---------|-----------------|-----------|-------------|--------------|
| **Critters Quest** | 59.1% | 6mo cliff + vest | ✅ SOV mining | ✅ Buyback + Game |
| Typical GameFi | 0-10% | 3-6mo cliff | ❌ Presale | ❌ Inflationary |
| Fair Launch Projects | 0-20% | 0-12mo | ✅ Various | ⚠️ Depends |
| Memecoins | 0-50% | ❌ None | ⚠️ Dev control | ❌ Usually not |

**Critters Quest combines the best elements:**
- Massive burn (most aggressive)
- Fair distribution (SOV-style)
- Real utility (4X game + NFTs)
- Deflationary mechanics (buyback + sinks)
- Long-term team alignment (6mo + vest)

---

## Launch Checklist

### Pre-TGE
- [ ] Execute burn transaction (3.79B QUEST)
- [ ] Verify team vesting contract (6mo cliff)
- [ ] Snapshot ME contributions (lock total)
- [ ] Deploy SOV mining contracts
- [ ] Set up presale (20M QUEST)
- [ ] Create initial LP (1,600 SOL + 16M QUEST)
- [ ] Audit smart contracts
- [ ] Announce tokenomics publicly

### TGE Day
- [ ] Launch SOV mining protocol
- [ ] Enable QUEST staking (earn 2% SOL)
- [ ] Distribute presale tokens
- [ ] Activate buyback mechanism
- [ ] Start emissions (1,903 QUEST/round)
- [ ] Monitor for issues
- [ ] Communicate with community

### Post-TGE
- [ ] Monitor circulating supply
- [ ] Track buyback efficiency
- [ ] Adjust parameters if needed
- [ ] Launch game economy (month 2-3)
- [ ] Enable game sinks → treasury
- [ ] Month 6: Begin team vesting
- [ ] Ongoing: Burns and deflationary metrics

---

## Conclusion

Critters Quest's tokenomics are designed for **long-term sustainability** and **fair value distribution**. By burning 59% of supply pre-launch, distributing 70%+ to the community, locking the team for 6 months, and creating multiple deflationary mechanisms, we've built a model that:

✅ **Can't be rugged** (no DEX dump allocation)  
✅ **Rewards early believers** (ME holders earn perpetual revenue)  
✅ **Distributes fairly** (SOV-style mining)  
✅ **Aligns incentives** (staking > selling)  
✅ **Deflationary long-term** (buybacks + game burns)  
✅ **Sustainable** (game feeds treasury)  

This is not a typical "launch and dump" tokenomics. This is a **multi-year ecosystem** with real utility, fair distribution, and aligned incentives for all participants.

---

**Document Version:** 1.1  
**Last Updated:** December 2025  
**Network:** Solana  
**Token:** $QUEST  
**Website:** critters.quest
