import React from 'react';

export interface IInputProps {
    placeholder?: string | undefined;
    value?: string | undefined;
    iconComponent?: React.ReactNode;
    type?: string | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}