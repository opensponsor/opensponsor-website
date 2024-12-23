export interface ViolationReport {
  exception: string
  propertyViolations: PropertyViolation[]
  classViolations: ClassViolation[]
  parameterViolations: ParameterViolation[]
  returnValueViolations: ReturnValueViolation[]
}

export interface PropertyViolation {
  constraintType: string
  path: string
  message: string
  value: string
}

export interface ClassViolation {
  constraintType: string
  path: string
  message: string
  value: string
}

export interface ParameterViolation {
  constraintType: string
  path: string
  message: string
  value: string
}

export interface ReturnValueViolation {
  constraintType: string
  path: string
  message: string
  value: string
}
