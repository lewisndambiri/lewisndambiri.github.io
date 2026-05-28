# Decision Policy Cost Report

This report sweeps failure-probability thresholds using assumed maintenance costs.

Important: this still uses current-state labels, not future failure outcomes.

## Cost Assumptions

- False negative cost: `10000.0`
- False positive cost: `1000.0`
- Planned intervention cost: `2500.0`

## Best Threshold Under These Assumptions

| true_positive | false_positive | false_negative | true_negative | precision | recall | alert_rate | total_cost | threshold |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 | 645000.0 | 0.2 |

## Top Thresholds

| threshold | total_cost | true_positive | false_positive | false_negative | true_negative | precision | recall | alert_rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.25 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.3 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.35 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.4 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.45 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.5 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.55 | 645000.0 | 252.0 | 5.0 | 1.0 | 88.0 | 0.9805 | 0.996 | 0.7428 |
| 0.05 | 645500.0 | 253.0 | 13.0 | 0.0 | 80.0 | 0.9511 | 1.0 | 0.7688 |
| 0.1 | 645500.0 | 253.0 | 13.0 | 0.0 | 80.0 | 0.9511 | 1.0 | 0.7688 |

## Warnings

- This report uses current-state labels, not future failure outcomes.
- Costs are assumptions and must be replaced with plant-specific downtime, labor, safety, and spare-part costs.
- Threshold selection is only meaningful after the label mapping and Sensor5 timing are confirmed.
