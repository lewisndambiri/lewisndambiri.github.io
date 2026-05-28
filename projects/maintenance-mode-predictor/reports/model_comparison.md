# Model Comparison Report

This report compares multiple candidate classifiers using 5-fold stratified cross-validation.

Important: this is still current-state classification. It is not future-failure prediction.

## Candidate Model Ranking

| model | uses_sensor5 | accuracy_mean | recall_macro_mean | f1_macro_mean | failure_recall | production_recall | roc_auc_production |
| --- | --- | --- | --- | --- | --- | --- | --- |
| decision_tree | True | 0.9826 | 0.9711 | 0.9772 | 0.996 | 0.9462 | 0.9746 |
| random_forest | True | 0.9826 | 0.9711 | 0.9772 | 0.996 | 0.9462 | 0.993 |
| gradient_boosting | True | 0.9797 | 0.9656 | 0.9732 | 0.996 | 0.9355 | 0.9713 |
| balanced_decision_tree | True | 0.9739 | 0.9686 | 0.9671 | 0.9802 | 0.957 | 0.9756 |
| logistic_regression | True | 0.9566 | 0.9498 | 0.9453 | 0.9644 | 0.9355 | 0.9883 |
| balanced_decision_tree_without_sensor5 | False | 0.786 | 0.7613 | 0.7442 | 0.8142 | 0.7097 | 0.7836 |
| random_forest_without_sensor5 | False | 0.783 | 0.7415 | 0.7295 | 0.83 | 0.6559 | 0.8208 |
| logistic_regression_without_sensor5 | False | 0.7224 | 0.7314 | 0.6914 | 0.7115 | 0.7527 | 0.8027 |
| gradient_boosting_without_sensor5 | False | 0.7629 | 0.6504 | 0.653 | 0.8933 | 0.4086 | 0.7973 |
| decision_tree_without_sensor5 | False | 0.7369 | 0.6483 | 0.6496 | 0.8379 | 0.4624 | 0.7474 |
| dummy_most_frequent | True | 0.7312 | 0.5 | 0.4224 | 1.0 | 0.0 | 0.5 |
| dummy_most_frequent_without_sensor5 | False | 0.7312 | 0.5 | 0.4224 | 1.0 | 0.0 | 0.5 |

## Sensor5 Impact

| model_family | f1_with_sensor5 | f1_without_sensor5 | f1_drop | recall_with_sensor5 | recall_without_sensor5 | recall_drop |
| --- | --- | --- | --- | --- | --- | --- |
| decision_tree | 0.9772 | 0.6496 | 0.3275 | 0.9711 | 0.6483 | 0.3228 |
| gradient_boosting | 0.9732 | 0.653 | 0.3202 | 0.9656 | 0.6504 | 0.3152 |
| logistic_regression | 0.9453 | 0.6914 | 0.2539 | 0.9498 | 0.7314 | 0.2184 |
| random_forest | 0.9772 | 0.7295 | 0.2477 | 0.9711 | 0.7415 | 0.2296 |
| balanced_decision_tree | 0.9671 | 0.7442 | 0.2229 | 0.9686 | 0.7613 | 0.2073 |
| dummy_most_frequent | 0.4224 | 0.4224 | 0.0 | 0.5 | 0.5 | 0.0 |

## Interpretation

- Prefer the simplest model that is reliable, explainable, and defensible under engineering review.
- Do not select the best-scoring model until `Sensor5` is confirmed as a pre-decision raw measurement.
- Random cross-validation should be replaced with time-based or held-out-asset validation when future data is available.

## Warnings

- Model comparison uses random cross-validation because timestamps and asset IDs are unavailable.
- High-scoring models still depend on the current label assumption.
- Sensor5 impact must be reviewed before selecting any operational model.
