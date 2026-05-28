# Future Failure Model Report

This report demonstrates the temporal training workflow for future-failure prediction.

Important: if the input is synthetic, these metrics are not real operational performance claims.

## Run Configuration

- Input: `reports/synthetic_future_log.csv`
- Horizon days: `7`
- Test start: `2026-03-01T00:00:00Z`
- Artifact: `artifacts/future_failure_model.joblib`

## Summary

| metric | value |
| --- | --- |
| train_rows | 708.0 |
| test_rows | 372.0 |
| roc_auc | 0.5812 |
| selected_threshold | 0.35 |
| accuracy | 0.7849 |

## Confusion Matrix

| index | pred_no_failure | pred_failure |
| --- | --- | --- |
| true_no_failure | 285 | 50 |
| true_failure | 30 | 7 |

## Features

- `machine_type`
- `run_hours`
- `sensor_1`
- `sensor_2`
- `sensor_3`
- `sensor_4`
- `sensor_5`
- `maintenance_type`

## Warnings

- Use real timestamped asset data before making maintenance claims.
- Synthetic data demonstrates mechanics only.
- Feature values must be available at or before prediction_timestamp.
