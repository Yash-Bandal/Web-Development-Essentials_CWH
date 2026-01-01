# useState vs useReducer

## 1. What problem does useReducer solve?

React provides two primary hooks for managing state in functional components:

* **useState** → Best for simple, independent state values
* **useReducer** → Best for complex state logic with strict update rules

Think of it this way:

| Hook       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| useState   | One or two values, simple updates                       |
| useReducer | Many related values, predictable and controlled updates |

---

## 2. What is a reducer? (Plain English)

A **reducer** is a pure function that:

* Takes the **current state**
* Takes an **action** (instruction)
* Returns a **new state**

It never mutates state and never touches the UI.

General shape:

```
(state, action) => newState
```

---

## 3. Why not always use useState?

You *can* use useState everywhere, but problems appear as logic grows.

### Example with useState

```jsx
const [balance, setBalance] = useState(0);

const deposit = (amount: number) => {
  setBalance(balance + amount);
};

const withdraw = (amount: number) => {
  if (balance >= amount) {
    setBalance(balance - amount);
  }
};
```

### Problems

* Business logic is spread across functions
* No single source of truth for rules
* Harder to test and audit
* Easy to introduce bugs

This is risky in systems like banking or finance.

---

## 4. What useReducer gives you

useReducer centralizes state updates:

* All changes go through **one function**
* Only **allowed actions** can modify state
* Rules are enforced in one place
* State transitions are predictable

This is why reducers are preferred for:

* Financial dashboards
* Admin panels
* Secure systems

---

## 5. Basic useReducer example

### Step 1: Define state

```jsx
interface CounterState {
  count: number;
}
```

### Step 2: Define allowed actions

```jsx
type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' };
```

Only these actions are allowed.

---

### Step 3: Reducer function

```jsx
function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {

  if (action.type === 'increment') {
    return { count: state.count + 1 };
  }

  if (action.type === 'decrement') {
    return { count: state.count - 1 };
  }

  return state;
}
```

---

### Step 4: Using useReducer

```tsx
import { useReducer } from 'react';

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## 6. What is dispatch?

`dispatch` sends an instruction to the reducer:

```
dispatch({ type: 'increment' });
```

Meaning:

> Apply the rule for increment defined in the reducer

State is **never modified directly**.

---

## 7. Comparison: useState vs useReducer

| Aspect         | useState                | useReducer               |
| -------------- | ----------------------- | ------------------------ |
| Complexity     | Simple                  | Handles complex logic    |
| Logic location | Spread across functions | Centralized in reducer   |
| Predictability | Lower                   | High                     |
| Business rules | Hard to enforce         | Easy to enforce          |
| Best for       | Simple UI state         | Secure / financial logic |

---

## 8. Real-world Budget Example

### State

```tsx
interface BudgetState {
  balance: number;
}
```

### Actions

```tsx
type BudgetAction =
  | { type: 'addIncome'; amount: number }
  | { type: 'addExpense'; amount: number };
```

### Reducer

```tsx
function budgetReducer(
  state: BudgetState,
  action: BudgetAction
): BudgetState {

  if (action.type === 'addIncome') {
    return { balance: state.balance + action.amount };
  }

  if (action.type === 'addExpense') {
    if (state.balance < action.amount) {
      return state; // prevent negative balance
    }
    return { balance: state.balance - action.amount };
  }

  return state;
}
```

---

## 9. When examiners expect useReducer

useReducer is preferred when:

* State is complex or nested
* Multiple actions modify the same state
* Business rules must be enforced
* Predictable state transitions are required

---

## 10. Exam-ready definition

> useReducer is a React hook used to manage complex state logic by centralizing state updates in a reducer function. It is preferred over useState when multiple related state transitions or strict business rules are involved.

---

## 11. One-line intuition

**useState stores data, useReducer controls how data is allowed to change.**
