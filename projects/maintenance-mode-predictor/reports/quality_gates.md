# Quality Gates Report

This report separates reproducibility failures from unresolved industrial-engineering warnings.

## Summary

| hard_failure | total_gates | passes | warnings | failures |
| --- | --- | --- | --- | --- |
| False | 9 | 5 | 4 | 0 |

## Gates

| name | status | severity | message |
| --- | --- | --- | --- |
| required_report:reports/data_audit.md | pass | error | reports/data_audit.md exists. |
| required_report:reports/model_report.md | pass | error | reports/model_report.md exists. |
| required_report:reports/model_comparison.md | pass | error | reports/model_comparison.md exists. |
| required_report:reports/decision_policy_report.md | pass | error | reports/decision_policy_report.md exists. |
| required_report:reports/future_model_report.md | pass | error | reports/future_model_report.md exists. |
| label_distribution_review | warn | warning | Class 0 is the majority under the current label assumption. Confirm `0 = Failure`, `1 = Production` before operational use. |
| sensor5_dominance | warn | warning | `Sensor5` importance is 0.9856. Confirm it is a pre-decision raw measurement, not leakage. |
| sensor5_ablation_impact | warn | warning | Removing `Sensor5` drops macro F1 by up to 0.3275. Model selection is blocked until this feature is validated. |
| future_workflow_boundary | warn | warning | Temporal future-failure report is a synthetic workflow demo, not real operational evidence. |

## Interpretation

- `fail` + `error`: fix before sharing or relying on reports.
- `warn`: known project risk that must stay visible.
- `pass`: gate condition is currently satisfied.
