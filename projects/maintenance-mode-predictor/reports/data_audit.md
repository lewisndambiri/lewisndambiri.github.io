# Data Audit Report

- Raw shape: `353` rows x `13` columns
- Complete-case modeling shape: `346` rows x `13` columns
- Duplicate rows after basic cleaning: `10`

## Missing Values

| index | value |
| --- | --- |
| Age | 1 |
| Machine_Type | 1 |
| Pressure | 1 |
| Maintenance | 1 |
| Temperature | 1 |
| Engine_problem | 0 |
| Run_Hours | 1 |
| Sensor1 | 0 |
| Sensor2 | 0 |
| Sensor3 | 0 |
| Sensor4 | 0 |
| Sensor5 | 1 |
| Operation_modes | 0 |

## Class Counts

The current label assumption is `0 = Failure`, `1 = Production`.

| Operation_modes | count |
| --- | --- |
| Failure | 253 |
| Production | 93 |

## Feature-Target Correlation

| index | Operation_modes |
| --- | --- |
| Sensor5 | -0.809 |
| Sensor2 | -0.26 |
| Run_Hours | -0.172 |
| Temperature | -0.154 |
| Sensor3 | -0.076 |
| Sensor4 | -0.001 |
| Machine_Type | 0.032 |
| Maintenance | 0.04 |
| Engine_problem | 0.085 |
| Pressure | 0.121 |
| Sensor1 | 0.203 |
| Age | 0.317 |

## Sensor5 By Class

| Operation_modes | count | mean | std | min | 25% | 50% | 75% | max |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0 | 253.0 | 170.826 | 52.903 | 34.0 | 130.0 | 160.0 | 213.0 | 333.0 |
| 1.0 | 93.0 | 24.226 | 27.213 | 8.0 | 12.0 | 12.0 | 31.0 | 150.0 |

## Outlier Notes

| index | min | max | iqr_lower | iqr_upper | outside_iqr_rule |
| --- | --- | --- | --- | --- | --- |
| Pressure | 23.0 | 7861.0 | -652.375 | 1322.625 | 28.0 |
| Run_Hours | 25100.0 | 850000.0 | 57500.0 | 491500.0 | 21.0 |
| Sensor1 | 0.5 | 9.4 | -0.35 | 3.25 | 13.0 |
| Sensor2 | 113.0 | 232.0 | 124.125 | 151.125 | 51.0 |
| Sensor5 | 8.0 | 333.0 | -168.0 | 416.0 | 0.0 |

## Warnings

- README class-distribution language should be reconciled with observed label counts.
- Sensor5 is highly correlated with the target and must be checked for leakage or status-code encoding.
- Random row splits are not sufficient for predictive maintenance validation when timestamps or asset IDs exist.
