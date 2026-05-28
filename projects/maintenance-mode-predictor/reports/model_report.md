# Model Report

Modeling boundary: Current-state classification from static rows, not future failure prediction.

## Complete-Case Class Counts

| Operation_modes | count |
| --- | --- |
| Failure | 253 |
| Production | 93 |

## Cross-Validation Summary

| model | accuracy | accuracy_std | precision_macro | precision_macro_std | recall_macro | recall_macro_std | f1_macro | f1_macro_std |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| dummy_most_frequent | 0.7312 | 0.0066 | 0.3656 | 0.0033 | 0.5 | 0.0 | 0.4224 | 0.0022 |
| decision_tree | 0.9826 | 0.0169 | 0.9849 | 0.0153 | 0.9711 | 0.0292 | 0.9772 | 0.0222 |
| decision_tree_without_sensor5 | 0.7369 | 0.0831 | 0.6655 | 0.0972 | 0.6483 | 0.1002 | 0.6496 | 0.1023 |

## Holdout Confusion Matrix

Rows are true labels and columns are predicted labels: `[Failure, Production]`.

| index | pred_failure | pred_production |
| --- | --- | --- |
| true_failure | 51 | 0 |
| true_production | 0 | 19 |

## Holdout Confusion Matrix Without Sensor5

| index | pred_failure | pred_production |
| --- | --- | --- |
| true_failure | 49 | 2 |
| true_production | 10 | 9 |

## Feature Importance

| index | value |
| --- | --- |
| Sensor5 | 0.9856 |
| Sensor1 | 0.0059 |
| Age | 0.0045 |
| Run_Hours | 0.0037 |
| Temperature | 0.0004 |
| Machine_Type | 0.0 |
| Pressure | 0.0 |
| Maintenance | 0.0 |
| Engine_problem | 0.0 |
| Sensor2 | 0.0 |
| Sensor3 | 0.0 |
| Sensor4 | 0.0 |

## Tree Rules

```text
|--- Sensor5 <= 66.00
|   |--- Sensor1 <= 0.95
|   |   |--- class: 1
|   |--- Sensor1 >  0.95
|   |   |--- class: 1
|--- Sensor5 >  66.00
|   |--- Age <= 71.00
|   |   |--- Run_Hours <= 113500.00
|   |   |   |--- class: 0
|   |   |--- Run_Hours >  113500.00
|   |   |   |--- Temperature <= 26.50
|   |   |   |   |--- Sensor1 <= 1.05
|   |   |   |   |   |--- class: 0
|   |   |   |   |--- Sensor1 >  1.05
|   |   |   |   |   |--- class: 0
|   |   |   |--- Temperature >  26.50
|   |   |   |   |--- class: 0
|   |--- Age >  71.00
|   |   |--- Sensor5 <= 118.00
|   |   |   |--- class: 0
|   |   |--- Sensor5 >  118.00
|   |   |   |--- class: 0
```

## Warnings

- High holdout accuracy should not be interpreted as production readiness.
- Sensor5 dominates the tree; confirm it is a pre-decision raw measurement.
- True predictive maintenance needs timestamps, asset IDs, and future-event labels.
