# Proposed Engineering Governance §14 clarification

**Status: DRAFT — NOT APPROVED AND NOT IN FORCE.** The Product Owner authorized drafting in the current instruction; no approval date for this proposed wording has been supplied. Engineering Governance §14 remains unchanged and authoritative until an explicit approval and recording of an amendment.

## Proposed replacement for the database/test-environment bullet

> Tests run in an isolated test environment, never against production or client data. Tests that exercise persistence use their own separately authorized, isolated test database. Tests that do not create, connect to, query, modify, or otherwise use a database do not require a test database.

This wording does not remove the isolated-environment requirement, authorize database operations, or change the remaining §14 obligations. The test environment and controls must be appropriate to the authorized work. Existing security, privacy, exception, high-risk review, independent acceptance, and release requirements remain in force, including Governance §§5, 12, 13 and 18–19.

## Context and disposition required

- Current §14 states that tests use an isolated test environment with its own database. SDD-001 v0.3 and D-114 exclude database creation and connections from this package. The proposed wording addresses database-free verification without requiring an unused database.
- The Product Owner selected controlled Windows development for ordinary trusted work and optional OS-enforced isolation for selected higher-risk testing as a **proposed direction**. Exact risk classifications, controls, security-review findings, and execution boundaries are not adopted by this draft.
- The Product Owner withdrew the previous SDD-001 scratch runtime authorization that required OS-enforced isolation. Any replacement runtime authorization must explicitly address §13 and receive applicable review. SE-001 remains a draft and is not approved.
- A qualified security reviewer and independent acceptance reviewer have not been identified for this package. This document does not record their approval or accept residual risk.
- Before this amendment can take effect, obtain applicable engineering/security input, explicit Product Owner approval of the exact wording, and record the decision and governance revision under §§15 and 18. Decide separately whether any future runtime authorization requires an SE entry under §13.

## References

[Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§5, 12–15, 18–19; [Decision Register](../decisions/DECISION_REGISTER.md) D-098 and D-114; [SDD-001 v0.3](../specs/SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md); and the unapproved [SE-001 proposal](SDD001-OPTION-A-SE-001-PROPOSAL.md).
