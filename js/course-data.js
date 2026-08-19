/* ============================================================
   Sales Quota Training — Course Content Data
   PalmPay Loan Sales Academy · August 2026
   Authoritative source: Sales Quota Training PowerPoint
   ============================================================ */

window.COURSE = {
  title: "Sales Quota Training",
  subtitle: "Understanding weekly credit control, risk stratification, and how to sustainably grow your quota",
  date: "August 2026",
  academy: "PalmPay Loan Sales Academy",
  overview: [
    "Why Sales Quota exists",
    "How quota works",
    "Risk stratification",
    "Weekly quota cycles",
    "Temporary quota adjustments",
    "Repayment and delinquency",
    "FPD1 / FPD7",
    "Return Calls",
    "Sustainable sales growth"
  ],
  sections: [
    {
      id: "s1",
      num: "01",
      icon: "target",
      title: "Purpose of Sales Quota",
      blurb: "Understand what Sales Quota is and why it exists.",
      topics: [
        {
          id: "t1",
          title: "What Is Sales Quota?",
          blocks: [
            { type: "text", html: "Sales Quota is a <strong>weekly credit control rule</strong> for each BD." },
            { type: "heading", text: "It determines" },
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "users", title: "Number of Customers", text: "The number of customers a BD can successfully introduce for credit." },
                { icon: "money", title: "Total Credit Amount", text: "The total credit amount available to those customers." }
              ]
            },
            { type: "heading", text: "The quota is based on" },
            {
              type: "chips",
              items: [
                { icon: "gauge", text: "BD risk performance" },
                { icon: "star", text: "Customer quality" }
              ]
            },
            { type: "principle", icon: "scale", label: "Objective", text: "Balance business growth with effective risk control." },
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "trendUp", title: "Healthier Quotas", text: "Higher-performing, low-risk BDs receive greater access.", accent: "green" },
                { icon: "trendDown", title: "Restricted Quotas", text: "BDs whose portfolios show higher risk face limits.", accent: "red" }
              ]
            }
          ]
        },
        {
          id: "t2",
          title: "Core Purpose of Sales Quota",
          blocks: [
            {
              type: "expand",
              cols: 3,
              items: [
                { icon: "shield", title: "Protect High-Quality Sales", text: "Allow low-risk BDs to access higher quotas so business growth isn't unnecessarily restricted." },
                { icon: "ban", title: "Limit High-Risk Sales", text: "Use quota limits to control risk exposure and prevent the expansion of bad debts." },
                { icon: "star", title: "Promote Quality Sales", text: "Shift focus from quantity to acquiring quality customers with genuine needs and good repayment capacity." }
              ]
            },
            { type: "principle", icon: "spark", label: "Key Principle", text: "Quality sales and good repayment performance create room for sustainable growth." },
            {
              type: "check",
              question: "A BD wants to understand why their quota is smaller than a colleague's. Sales Quota is primarily based on:",
              options: [
                "BD risk performance and customer quality",
                "The number of calls made each day",
                "The length of time at PalmPay",
                "The size of the branch office"
              ],
              answer: 0,
              explanation: "The quota is based on BD risk performance and customer quality."
            }
          ]
        }
      ]
    },
    {
      id: "s2",
      num: "02",
      icon: "layers",
      title: "Understanding Your Sales Quota",
      subtitle: "How the system measures, monitors, and controls what you can sell.",
      blurb: "How the system measures, monitors, and controls what you can sell.",
      topics: [
        {
          id: "t3",
          title: "Two-Dimensional Control",
          blocks: [
            { type: "text", html: "The system monitors <strong>two dimensions simultaneously</strong> to control what you can sell." },
            {
              type: "expand",
              cols: 2,
              items: [
                { icon: "users", title: "Dimension 1 · Credit Users", text: "The number of customers a BD can successfully introduce for credit." },
                { icon: "money", title: "Dimension 2 · Credit Amount", text: "The total credit value available across those customers." }
              ]
            },
            { type: "warning", icon: "alert", label: "Important Rule", text: "If any ONE dimension reaches its upper limit, the customer's credit application may be intercepted — even if the other dimension still has room." }
          ]
        },
        {
          id: "t4",
          title: "Two-Dimensional Control Example",
          blocks: [
            { type: "text", html: "Explore how the two dimensions interact in a real scenario. <strong>Click each dimension</strong> to understand how it affects availability." },
            {
              type: "dual",
              hint: "Tap a card to reveal what it means for this BD",
              items: [
                {
                  title: "CREDIT USERS",
                  value: "10 / 10",
                  bar: "100",
                  status: "Limit reached",
                  tone: "danger",
                  reveal: "The maximum number of Credit Users has been reached. Even though this dimension is full, the BD cannot bring in additional customers through it."
                },
                {
                  title: "CREDIT AMOUNT",
                  value: "₦6M / ₦10M",
                  bar: "60",
                  status: "Remaining: ₦4M",
                  tone: "ok",
                  reveal: "Although ₦4M remains in the Credit Amount, the BD has already reached the maximum number of Credit Users. Additional customers may be blocked."
                }
              ]
            },
            { type: "keymessage", text: "Although ₦4M remains in the Credit Amount, the BD has already reached the maximum number of Credit Users. Additional customers may be blocked." }
          ]
        },
        {
          id: "t5",
          title: "Quota Status & System Messages",
          blocks: [
            { type: "text", html: "When a BD's quota blocks a customer's borrowing, the system surfaces a specific message. Learn the codes:" },
            {
              type: "alerts",
              items: [
                { code: "RJ020", tone: "danger", title: "Refusal of Sales Quota Exceeding Limit", text: "Occurs when a customer attempts to borrow but the BD's Sales Quota has already been fully utilized." },
                { code: "RJ021", tone: "warn", title: "Sales Quota Freeze Refused", text: "Occurs when the BD's Sales Quota is frozen — customers associated with the BD cannot proceed with borrowing." }
              ]
            },
            {
              type: "check",
              question: "A customer tries to borrow, but the BD's Sales Quota has already been fully utilized. Which system message appears?",
              options: ["RJ020", "RJ021", "FPD1", "FPD7"],
              answer: 0,
              explanation: "RJ020 — Refusal of Sales Quota Exceeding Limit — appears when the BD's Sales Quota has already been fully utilized."
            }
          ]
        },
        {
          id: "t6",
          title: "Risk Stratification Quota",
          blocks: [
            { type: "text", html: "The quota assigned to each BD is determined by:" },
            {
              type: "chips",
              items: [
                { icon: "layers", text: "BD risk hierarchy" },
                { icon: "star", text: "Customer performance" }
              ]
            },
            { type: "text", html: "The system evaluates historical business and risk performance and places the BD into a specific risk level." },
            {
              type: "flow",
              tone: "green",
              items: ["Good Customer", "Quality Good", "Better Repayment", "Better Risk Performance", "Higher Quota"]
            },
            { type: "principle", icon: "spark", label: "Key Principle", text: "The more stable the customer quality and repayment performance, the higher the chances of receiving a healthier quota the following week." }
          ]
        },
        {
          id: "t7",
          title: "Quota Utilization Rate & BD Actions",
          blocks: [
            { type: "text", html: "Watch how much of your weekly quota has been used — and what you do next matters." },
            { type: "meter", value: 72, label: "UTILIZED", caption: "of your weekly quota", note: "Quality bar must keep rising →" },
            { type: "text", html: "As quota utilization increases, the bar for sales quality must rise with it." },
            { type: "principle", icon: "gauge", label: "BD Best Practice", text: "Do not rush to use up available quota with low-quality customers." },
            { type: "keymessage", text: "An exhausted quota filled with weak customers helps no one — it only raises risk for the following week's rating." }
          ]
        },
        {
          id: "t8",
          title: "Quota Stratification: Risk Levels",
          blocks: [
            { type: "text", html: "The system places each BD into a risk level. <strong>Select each level</strong> to explore how risk maps to quota." },
            {
              type: "levels",
              note: "A = Highest · E = Lowest",
              levels: [
                { key: "A", note: "Higher risk level - healthiest quota" },
                { key: "B", note: "High risk level - Healthy quota" },
                { key: "C", note: "Moderate risk level - moderate quota" },
                { key: "D", note: "Low risk level - low quota" },
                { key: "E", note: "Lowest risk level - lowest quota" }
              ]
            },
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "trendUp", title: "Higher Risk Level", text: "More Healthy Quota", accent: "green" },
                { icon: "trendDown", title: "Lower Risk Level", text: "Restricted or Zero Quota", accent: "red" }
              ]
            },
            { type: "text", html: "A BD's risk level is not permanent — performance can improve or deteriorate." }
          ]
        },
        {
          id: "t9",
          title: "Customer Relationship Transfer",
          blocks: [
            { type: "text", html: "Customer Relationship Transfer refers to the <strong>sales ownership recorded at the point when the customer's credit is successfully utilized</strong>." },
            {
              type: "timeline",
              items: [
                { title: "Customer applies for credit", desc: "Application recorded" },
                { title: "Credit is utilized", desc: "Sales ownership locked" },
                { title: "Quota attribution locked to this BD", desc: "", emphasis: true },
                { title: "Customer later transferred to another BD", desc: "" },
                { title: "Quota attribution does NOT change", desc: "", emphasis: true }
              ]
            },
            { type: "principle", icon: "lock", label: "Key Takeaway", text: "The BD responsible for the customer when credit is utilized carries the quota attribution — permanently." }
          ]
        },
        {
          id: "t10",
          title: "Quota Update Cycle",
          blocks: [
            { type: "text", html: "Everything revolves around <strong>Monday</strong>. Here is the weekly cycle:" },
            {
              type: "timeline",
              badge: "Every Monday",
              items: [
                { title: "Update Time", desc: "Risk rating is performed at a fixed time every Monday to determine risk level and quota." },
                { title: "Statistical Cycle", desc: "Monday 00:00 → Sunday 23:59:59" },
                { title: "Quota Clearing", desc: "Quota resets every Monday 00:00. Unused quota does NOT carry over." },
                { title: "Temporary Adjustment", desc: "Valid only until the next Monday rating cycle." }
              ]
            },
            { type: "quote", text: "Every Monday is a fresh start — last week's unused quota disappears, and a new quota is set from your latest risk rating." }
          ]
        },
        {
          id: "t11",
          title: "Repayment & Quota Release",
          blocks: [
            {
              type: "flow",
              tone: "green",
              items: ["Quota Used", "Customer Repays", "Quota Released", "Available Again"]
            },
            { type: "text", html: "Used quota is not necessarily permanently occupied. Customer repayment directly affects the amount of quota that becomes available again." },
            { type: "principle", icon: "recycle", label: "Key Principle", text: "Customer repayment creates quota availability. BDs must not only focus on new sales but also actively monitor and support customer repayment." }
          ]
        },
        {
          id: "t12",
          title: "How to Increase Your Quota",
          blocks: [
            { type: "text", html: "Six practices that build a healthier quota over time:" },
            {
              type: "cards",
              cols: 3,
              items: [
                { icon: "target", title: "Genuine Needs", text: "Acquiring customers with genuine business needs" },
                { icon: "money", title: "Repayment Capacity", text: "Ensuring customers have repayment capacity" },
                { icon: "check", title: "Good Repayment Behavior", text: "Maintaining good customer repayment behavior" },
                { icon: "gauge", title: "Control FPD1 & FPD7", text: "Controlling FPD1 and FPD7" },
                { icon: "ban", title: "Avoid High-Risk Customers", text: "Avoiding low-quality or high-risk customers" },
                { icon: "phone", title: "Follow Up Early", text: "Following up on customers before they become overdue" }
              ]
            },
            {
              type: "flow",
              tone: "green",
              items: [
                { text: "Good Sales Quality" },
                { text: "Good Repayment Performance", prefix: "+" },
                { text: "Better Risk Rating" },
                { text: "Healthier Quota" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "s3",
      num: "03",
      icon: "shieldAlert",
      title: "Temporary Adjustments & Risk Control",
      subtitle: "When quota falls short, and what causes it to shrink.",
      blurb: "When quota falls short, and what causes it to shrink.",
      topics: [
        {
          id: "t13",
          title: "Temporary Quota Adjustment Process",
          blocks: [
            { type: "text", html: "When your quota falls short, a temporary adjustment follows this five-step process:" },
            {
              type: "steps",
              items: [
                { title: "Step 1", desc: "Contact your ZM and explain the business requirement and reason for the increase." },
                { title: "Step 2", desc: "The ZM submits the Temporary Quota Adjustment in the Kili background." },
                { title: "Step 3", desc: "The request must include a clear reason; the system records the adjustment history." },
                { title: "Step 4", desc: "Once approved, the adjustment takes effect for the current week." },
                { title: "Step 5", desc: "The adjustment expires at the next Monday rating cycle." }
              ]
            }
          ]
        },
        {
          id: "t14",
          title: "Temporary Adjustment Rules",
          blocks: [
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "scale", title: "Upper & Lower Limits", text: "Temporary adjustments have upper and lower limits." },
                { icon: "ban", title: "Maximum Value", text: "The requested amount cannot exceed the maximum value permitted by the system." },
                { icon: "clock", title: "Current Week Only", text: "The adjustment is only valid for the current week." },
                { icon: "refresh", title: "Re-evaluated on Monday", text: "The quota will be re-evaluated during the next Monday rating cycle." }
              ]
            },
            { type: "principle", icon: "target", label: "Best Long-Term Strategy", text: "Don't depend on temporary adjustments. Maintain strong risk performance and let the system reward you with a healthier quota." }
          ]
        },
        {
          id: "t15",
          title: "What Causes Quota Reduction?",
          blocks: [
            {
              type: "flow",
              tone: "danger",
              items: ["Customer quality deteriorates", "Delinquency increases", "Risk level falls", "Quota is reduced"]
            },
            { type: "text", html: "One of the most common causes of quota reduction is a decline in <strong>Risk Rating</strong>. The system re-rates BDs every Monday based on business and risk performance." },
            { type: "keymessage", text: "Protecting your quota starts with protecting customer quality — screen carefully, monitor repayment, and act before customers go overdue." }
          ]
        },
        {
          id: "t16",
          title: "Customer Delinquency Control",
          blocks: [
            {
              type: "kpi",
              items: [
                { value: "≤ 10%", label: "FPD7 TARGET", sub: "First Payment Default within 7 days", tone: "green" },
                { value: "≤ 30%", label: "FPD1 TARGET", sub: "First Payment Default within 1 day", tone: "orange" }
              ]
            },
            {
              type: "flow",
              tone: "green",
              items: ["Lower Customer Delinquency", "Better Risk Level", "Higher Quota"]
            },
            {
              type: "check",
              question: "A BD's portfolio shows rising delinquency. What is the most likely effect on quota?",
              options: [
                "Risk level falls and the quota is reduced",
                "The quota automatically increases",
                "Unused quota carries over to next week",
                "The quota freeze is lifted automatically"
              ],
              answer: 0,
              explanation: "Customer quality deteriorates → delinquency increases → risk level falls → quota is reduced."
            }
          ]
        },
        {
          id: "t17",
          title: "BD Responsibilities",
          blocks: [
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "shield", title: "1 · Strictly Screen Customers", text: "Genuine business scenarios, real activity, sufficient repayment ability, accurate application info." },
                { icon: "scale", title: "2 · Do Not Lower the Standard for Quantity", text: "It is better to introduce one less customer than to introduce one bad debt." },
                { icon: "phone", title: "3 · Monitor Repayment", text: "Follow up with customers and remind them to repay on time." },
                { icon: "gauge", title: "4 · Control Delinquency", text: "Target: FPD7 ≤ 10% / FPD1 ≤ 30%" }
              ]
            }
          ]
        },
        {
          id: "t18",
          title: "Increase Sales While Reducing Risk",
          blocks: [
            { type: "text", html: "For A-Level (Low Risk) sales, a BD may receive <strong>additional quota</strong> when <strong>all</strong> of the following conditions are met:" },
            {
              type: "checklist",
              counterLabel: "Conditions confirmed",
              items: [
                { title: "Risk Level A", desc: "Current risk level is A." },
                { title: "Volume Threshold", desc: "Cumulative sales volume exceeds the specified quantity." },
                { title: "FPD1 < 20%", desc: "First payment default kept below 20%." }
              ]
            },
            { type: "keymessage", text: "The goal is not simply to sell more. The goal is to sell more quality customers while keeping risk low." }
          ]
        },
        {
          id: "t19",
          title: "Return Call & Its Impact on Quota",
          blocks: [
            {
              type: "timeline",
              items: [
                { title: "Credit Utilized", desc: "Day 0" },
                { title: "Return Call", desc: "Day 4–11" },
                { title: "Result", desc: "Recorded" },
                { title: "Future Quota Impacted", desc: "", emphasis: true }
              ]
            },
            { type: "text", html: "A Return Call is an important risk-control process. Typically, <strong>4–11 days</strong> after the customer uses the credit, the company conducts a telephone return visit to confirm the customer's application and borrowing information." },
            { type: "keymessage", text: "The result of the Return Call can directly affect the BD's future quota — accurate, honest customer information matters at every step." }
          ]
        },
        {
          id: "t20",
          title: "Before Customer Credit Utilization",
          blocks: [
            { type: "text", html: "Before the customer uses the credit, confirm that the customer:" },
            {
              type: "checklist",
              counterLabel: "Confirmed checks",
              items: [
                { title: "Confirms the loan is the one applied for." },
                { title: "Understands the loan amount." },
                { title: "Understands the loan term." },
                { title: "Understands applicable fees." },
                { title: "Understands the repayment arrangement." },
                { title: "Has a genuine, clearly understood loan purpose." },
                { title: "Has information consistent with the application." },
                { title: "Is not involved in agency or packaging arrangements." }
              ]
            },
            { type: "warning", icon: "ban", label: "Zero-Tolerance Principle", text: "No agency, packaging or misleading sales, and no situation where a BD receives money from merchants privately." }
          ]
        }
      ]
    },
    {
      id: "s4",
      num: "04",
      icon: "spark",
      title: "Mindset & Key Takeaways",
      blurb: "Adopt the right mindset and take away the key rules that protect your quota.",
      topics: [
        {
          id: "t21",
          title: "The BD Sales Quota Mindset",
          blocks: [
            {
              type: "comparison",
              old: { tag: "THE OLD MINDSET", text: "“I need to use all my quota.”" },
              right: { tag: "THE RIGHT MINDSET", text: "“I need to use my quota on the right customers.”" }
            },
            {
              type: "flow",
              tone: "green",
              items: ["Quality Customers", "Good Repayment Behavior", "Lower FPD1 / FPD7", "Better Risk Rating", "Healthier Quota", "Sustainable Growth"]
            },
            { type: "text", html: "Sales Quota should not be viewed as a restriction on sales. It is a <strong>risk-control mechanism</strong> designed to support sustainable sales growth." },
            {
              type: "check",
              question: "Which mindset aligns with this training?",
              options: [
                "“I need to use my quota on the right customers.”",
                "“I need to use all my quota.”",
                "“Quota limits my earnings.”",
                "“Temporary adjustments are permanent fixes.”"
              ],
              answer: 0,
              explanation: "The right mindset: use your quota on the right customers."
            }
          ]
        },
        {
          id: "t22",
          title: "Key Takeaways",
          blocks: [
            {
              type: "checklist",
              counterLabel: "Takeaways reviewed",
              items: [
                { title: "Sales Quota is a weekly credit control rule for each BD." },
                { title: "Quota is controlled via Credit Users and Credit Amount." },
                { title: "Two-Dimensional Control: either limit can restrict credit." },
                { title: "Risk Stratification determines quota quality and size." },
                { title: "A is the highest risk level; E is the lowest." },
                { title: "Quota automatically reviews and updates every Monday." },
                { title: "Unused quota does not carry over to the next week." },
                { title: "Customer repayment releases used quota." },
                { title: "High delinquency negatively affects Risk Rating & Quota." },
                { title: "Maintain FPD7 ≤ 10% and FPD1 ≤ 30%." },
                { title: "Return Call results can directly affect future quota." },
                { title: "Temporary adjustments are short-term, not substitutes for good performance." }
              ]
            },
            {
              type: "final",
              avoid: "Avoid agency, packaging, misleading sales and private collection of money from merchants.",
              goal: "The goal is not to maximize the number of customers — it is to maximize quality sales while controlling risk.",
              quote: "Don't chase quota utilization. Chase quality customers.",
              formula: "Good sales + good repayment = better risk performance + healthier quota."
            }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   Knowledge Assessment
   Pass mark: 80%
   ============================================================ */
window.ASSESSMENT = {
  passMark: 80,
  title: "Knowledge Assessment",
  questions: [
    {
      q: "What is Sales Quota?",
      options: [
        "A monthly sales target for the branch",
        "A weekly credit control rule for each BD",
        "A daily limit on customer visits",
        "A reward for top sales performers"
      ],
      answer: 1
    },
    {
      q: "Sales Quota is based on which two factors?",
      options: [
        "Customer age and loan size",
        "Number of sales and call duration",
        "Merchant location and product type",
        "BD risk performance and customer quality"
      ],
      answer: 3
    },
    {
      q: "Which two dimensions does the system use to control quota?",
      options: [
        "Credit Users and Credit Amount",
        "Sales target and commission",
        "Loan amount and interest rate",
        "Risk level and repayment term"
      ],
      answer: 0
    },
    {
      q: "A BD has used 10 / 10 Credit Users but still has ₦4M remaining in Credit Amount. What happens to additional customers?",
      options: [
        "They proceed normally using the remaining ₦4M",
        "The Credit Amount resets automatically",
        "They may be blocked because Credit Users has reached its limit",
        "The quota is temporarily increased"
      ],
      answer: 2
    },
    {
      q: "Which system message appears when the BD's Sales Quota has already been fully utilized?",
      options: ["RJ019", "FPD7", "RJ020", "RJ021"],
      answer: 2
    },
    {
      q: "Which system message appears when the BD's Sales Quota is frozen and associated customers cannot proceed with borrowing?",
      options: ["FPD1", "RJ022", "RJ020", "RJ021"],
      answer: 3
    },
    {
      q: "In quota stratification, which risk level is the HIGHEST?",
      options: ["A", "E", "D", "B"],
      answer: 0
    },
    {
      q: "Which statement about risk levels and quota is correct?",
      options: [
        "Risk levels are permanent and never change",
        "Higher Risk Level → More Healthy Quota",
        "Lower Risk Level → Restricted or Zero Quota",
        "Risk level is decided once per quarter"
      ],
      answer: 1
    },
    {
      q: "When does the quota reset and clear?",
      options: [
        "Every Friday at close",
        "Every Sunday 23:59",
        "On the 1st of each month",
        "Every Monday 00:00"
      ],
      answer: 3
    },
    {
      q: "What happens to unused quota at the end of the week?",
      options: [
        "It is added to the Credit Amount",
        "It does not carry over",
        "It carries over to the following week",
        "It converts into a temporary adjustment"
      ],
      answer: 1
    },
    {
      q: "What makes used quota available again?",
      options: [
        "Customer repayment",
        "Waiting for the Monday rating",
        "Submitting a temporary adjustment",
        "Making more sales calls"
      ],
      answer: 0
    },
    {
      q: "What are the FPD targets BDs must maintain?",
      options: [
        "FPD7 ≤ 30% and FPD1 ≤ 10%",
        "FPD7 ≤ 20% and FPD1 ≤ 40%",
        "FPD7 ≤ 10% and FPD1 ≤ 30%",
        "FPD7 ≤ 5% and FPD1 ≤ 15%"
      ],
      answer: 2
    },
    {
      q: "How long is a temporary quota adjustment valid?",
      options: [
        "For one business day",
        "Only for the current week, expiring at the next Monday rating cycle",
        "Until the end of the month",
        "Permanently once approved"
      ],
      answer: 1
    },
    {
      q: "When is a Return Call typically conducted after a customer uses credit?",
      options: [
        "4–11 days after credit utilization",
        "On the same day as utilization",
        "Only after a customer becomes overdue",
        "30 days after utilization"
      ],
      answer: 0
    },
    {
      q: "Which of these is a zero-tolerance principle in this training?",
      options: [
        "Using all available quota as quickly as possible",
        "Relying on temporary adjustments every week",
        "Introducing customers without verifying repayment capacity",
        "No agency, packaging or misleading sales, and no private collection of money from merchants"
      ],
      answer: 3
    },
    {
      q: "Which is the right sales quota mindset?",
      options: [
        "“Sales Quota is a restriction I must overcome.”",
        "“I need to use all my quota.”",
        "“I need to use my quota on the right customers.”",
        "“Temporary adjustments replace good performance.”"
      ],
      answer: 2
    }
  ]
};
