# Car Optimization Challenge

This is a coding challenge to calculate the **minimum number of cars** needed to carry all people to a trip, given:

- `P[]`: number of people that arrived in each car.
- `S[]`: number of available seats in each car.

The goal is to **reassign people to as few cars as possible** and park the rest.

---

## Example

```ts
P = [1, 4, 1]
S = [1, 5, 1]
→ Output: 2
```

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd code-chalenge-collinson
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the solution:**
    The script will execute and print the results for the example cases.
    ```bash
    npx ts-node src/utils/calculateCars.ts
    ```

4.  **Run the test:**
    ```bash
    npm test
    ```
