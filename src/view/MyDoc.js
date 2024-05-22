import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { fixText } from 'arabic-formatter';


import { Font } from '@react-pdf/renderer';

// Register the Arabic font
Font.register({
    family: 'Janna LT',
    src: 'font/j.ttf',
});

const arabicText = 'مرحبًا بالعالم';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Helvetica',
        paddingTop: 50,
        paddingBottom: 50,
        paddingHorizontal: 50,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    content: {
        fontSize: 12,
        marginBottom: 8,
    },
    arabicText: {
        direction: 'rtl',
        textAlign: 'right',
        lineHeight: 1.5,

    },
});


// Create Document Component
const MyDoc = () => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.title}>My Report</Text>
            <Text style={styles.subtitle}>Report Date: {new Date().toLocaleDateString()}</Text>
            <View>
                <Text style={styles.content}> هنا عالمي</Text>
                <Text style={styles.content}>Sed euismod gravida nisi, ac vulputate justo feugiat ut.</Text>
                <Text style={styles.content}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
            </View>
        </Page>
    </Document>
);
export default MyDoc;